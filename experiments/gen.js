/**
 * Copyright 2016 Alexis Vincent (http://alexisvincent.io)
 */
// Modified by Carlos Galarza <carloslfu@gmail.com>
const path = require('./path')
const fs = require('./fs')
const { filterAsync } = require('./asyncFns')
const _ = require('lodash')
const {convertPackage} = require('./node-conversion')

const nodeCoreModules = [
    'assert',
    'buffer',
    'child_process',
    'cluster',
    'console',
    'constants',
    'crypto',
    'dgram',
    'dns',
    'domain',
    'events',
    'fs',
    'http',
    'https',
    'module',
    'net',
    'os',
    'path',
    'process',
    'punycode',
    'querystring',
    'readline',
    'repl',
    'stream',
    'string_decoder',
    'sys',
    'timers',
    'tls',
    'tty',
    'url',
    'util',
    'vm',
    'zlib'
]

/**
 * Get all directories in a directory
 * @param srcpath
 * @returns {Promise.<*>}
 */
const getDirectories = (srcpath) => {
  return fs.list(srcpath)
    .then(x => {
      return Promise.resolve(x)
    })
    .then(
    dirs => filterAsync(dirs, async file =>
      (await fs.stat(path.join(srcpath, file))).dir
    )
  ).then(dirs => {
    return Promise.all(dirs.map(async dir => {
      if (dir.startsWith('@')) {
        return getDirectories(path.join(srcpath, dir)).then(subdirs => {
          return subdirs.map(subdir => path.join(dir, subdir))
        })
      } else {
        return dir
      }
    }))
  }).then(dirs => {
    // Flatten array in case there are scoped packages that produce a nested array
    return [].concat.apply([], dirs)
  })
}

/**
 * For a given dir, get the corresponding package.json
 * @param dir
 * @returns {Promise.<TResult>}
 */
const getPackageConfig = (dir) => {
  return fs.read(path.join(dir, 'package.json'))
    .then(JSON.parse)
    // Pad it with defaults
    .then(config => Object.assign({
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
      augmented: false,
    }, config))
    .catch(() => null)
}

const getOwnDeps = (packageDir) => {
  const node_modules = path.join(packageDir, 'node_modules')

  return getDirectories(node_modules)
      // Map directories to their package.json
      .then(dirs => Promise.all(dirs.map(dir => getPackageConfig(path.join(packageDir, 'node_modules', dir)))))
      // Filter out anything that wasn't a package
      .then(configs => configs.filter((v, k) => v))

      .catch(err => {
          // console.log(err)
          return []
      })
}

/**
* Trace the full node_modules tree, and build up a registry on the way.
*
* Registry is of the form:
* {
*    'lodash@1.1.2': {
*      name: 'lodash',
*      config: <the package.json file>,
*      key: 'lodash@1.1.2',
*      location: 'node_modules/lodash'
*    },
*    ...
* }
*
* Returned Tree is of the form:
* [
*    {
*      name: 'react',
*      version: '15.4.1',
*      deps: <tree, like this one>
*    },
*    ...
* ]
*
*
* @param directory
* @param name
* @param version
* @param registry
* @returns {Promise.<{tree: *, registry: Array}>}
*/
const traceModuleTree = (directory, name = false, version = false, registry = {}) => {

  return Promise.resolve({name, version})
  // Resolve the package.json and set name and version from there if either is not specified
      .then(({name, version}) => (!name || !version) ? getPackageConfig(directory) : {name, version})

      .then(({name, version}) => (

          // Get the dependencies in node_modules
          getOwnDeps(directory)

          // Merge package { name@version : package.json } into the registry
              .then(ownDeps => {
                  // console.log(ownDeps)
                  ownDeps.forEach((dep => {
                      const versionName = dep.name + '@' + dep.version
                      registry[versionName] = {
                          name: dep.name,
                          config: dep,
                          key: versionName,
                          location: path.join(directory, 'node_modules', dep.name)
                      }
                  }))
                  return ownDeps
              })

              .then(ownDeps => {
                  // map each package.json to it's own tree
                  return Promise.all(ownDeps.map(({name, version}) => {
                      return traceModuleTree(path.join(directory, 'node_modules', name), name, version, registry)
                      // Drop the registry
                          .then(({tree, registry}) => tree)
                      // map the module and its dep list to a tree entry
                  })).then(deps => ({name, deps, version: version}))
              })

              .then(tree => ({tree, registry}))
      ))
}

/**
 * Take an array of objects and turn it into an object with the key being the specified key.
 *
 * objectify('name', [
 *      {name: 'Alexis', surname: 'Vincent'},
 *      {name: 'Julien', surname: 'Vincent'}
 * ])
 *
 * =>
 *
 * {
 *    'Alexis': {name: 'Alexis', surname: 'Vincent'},
 *    'Julien': {name: 'Julien', surname: 'Vincent'},
 * }
 *
 * @param key
 * @param array
 * @returns {*}
 */
const objectify = (key, array) => {
    return array.reduce((obj, arrayItem) => {
        obj[arrayItem[key]] = arrayItem
        return obj
    }, {})
}

/**
 * Given a registry of package.json files, use jspm/npm to augment them to be SystemJS compatible
 * @param registry
 * @returns {Promise.<TResult>}
 */
const augmentRegistry = (registry) => {
  return Promise.all(Object.keys(registry)
      .map(key => {
          const depMap = registry[key]

          // Don't augment things that already have been (from the cache)
          let shouldAugment = !depMap.augmented

          // Don't augment things that specify config.jspmPackage
          if (depMap.config.jspmPackage != undefined && depMap.config.jspmPackage)
              shouldAugment = false

          // Don't augment things that specify config.jspmNodeConversion == false
          if (depMap.config.jspmNodeConversion !== undefined && !depMap.config.jspmNodeConversion)
              shouldAugment = false

          // Don't augment things that specify config.jspm.jspmNodeConversion == false
          if (depMap.config.jspm !== undefined
              && depMap.config.jspm.jspmNodeConversion !== undefined
              && !depMap.config.jspm.jspmNodeConversion)
              shouldAugment = false

          // Augment the package.json
          return shouldAugment ?
              convertPackage(depMap.config, ':' + key, './' + depMap.location)
                  .then(config => Object.assign(depMap, {config, augmented: true}))
                  .catch(e => console.error(e)) :
              depMap
      }))
      .then(objectify.bind(null, 'key'))
}

/**
 * Convenience method to allow easy chaining
 * @param tree
 * @param registry
 */
const augmentModuleTree = ({tree, registry}) => augmentRegistry(registry).then(registry => ({tree, registry}))

/**
 * Only keep keys we are interested in for package config generation
 * @param registry
 * @returns {Promise.<*>}
 */
const pruneRegistry = (registry) => {
    return Promise.resolve(
        objectify('key',
            Object.keys(registry)
                .map(key => {
                        return Object.assign({}, registry[key], {
                            config: _.pick(
                                registry[key].config, [
                                    'meta',
                                    'map',
                                    'main',
                                    'format',
                                    'defaultExtension',
                                    'defaultJSExtensions'
                                ])
                        })
                    }
                ))
    )
}

/**
 * Convenience method to allow easy chaining
 * @param tree
 * @param registry
 */
const pruneModuleTree = ({tree, registry}) => pruneRegistry(registry).then(registry => ({tree, registry}))

/**
 * Walk the tree, call f on all nodes.
 * @param tree
 * @param registry
 * @param f - (versionName, deps, tree)
 * @param depth - How deep should we go
 * @param skip - How many levels should we skip
 */
const walkTree = ({tree, registry}, f, depth = Infinity, skip = 0) => {
    if (depth >= 1) {
        const {name, deps, version} = tree

        if (skip <= 0)
            f(registry[name + '@' + version], deps, tree)

        if (depth >= 2)
            deps.forEach(tree => walkTree({tree, registry}, f, depth - 1, skip - 1))
    }
}

/**
 * Use the tree and registry to create a SystemJS config
 *
 * TODO: Use SystemJS 20 normalize idempotency to optimize mappings
 * // Do this by mapping package@version to location like JSPM does
 *
 * @param tree
 * @param registry
 * @returns {Promise.<{map: {}, packages: {}}>}
 */
const generateConfig = ({tree, registry}) => {

    const systemConfig = {
        "map": {},
        "packages": {}
    }

    // get readable stream working
    // TODO: Fix this hack
    systemConfig['map']["_stream_transform"] = "node_modules/readable-stream/transform"

    // Walk first level of dependencies and map package name to location
    walkTree({tree, registry}, ({name, config, key, location}, deps) => {
        systemConfig['map'][name] = location
    }, 2, 1)

    // Walk full dep tree and assign package config entries
    walkTree({tree, registry}, ({name, config, key, location}, deps, tree) => {

        // Construct package entry based off config
        let packageEntry = Object.assign({
            map: {},
            meta: {}
        }, config)

        // Add mappings for it's deps.
        walkTree({tree, registry}, ({name, config, key, location}, deps) => {
            packageEntry['map'][name] = location
        }, 2, 1)

        // If there are no mappings, don't pollute the config
        if (Object.keys(packageEntry['map']).length == 0)
            delete packageEntry['map']

        // Assign package entry to config
        systemConfig['packages'][location] = packageEntry

        // Add mappings for all jspm-nodelibs
        // TODO: Fix this hack
        nodeCoreModules.forEach(lib => {
            systemConfig['map'][lib] = "node_modules/jspm-nodelibs-" + lib
        })

    }, Infinity, 1)

    // TODO: Make the mappings here more universal
    // map nm: -> node_modules/ to make config smaller
    systemConfig['paths'] = {
        'nm:': 'node_modules/'
    }

    // map nm: -> node_modules/ to make config smaller
    Object.keys(systemConfig['map']).forEach(key => {
        systemConfig['map'][key] = systemConfig['map'][key].replace(/^node_modules\//, 'nm:')
    })

    // map nm: -> node_modules/ to make config smaller
    Object.keys(systemConfig['packages']).forEach(key => {
        if (key.startsWith('node_modules/')) {
            systemConfig['packages'][key.replace(/^node_modules\//, 'nm:')] = systemConfig['packages'][key]
            delete systemConfig['packages'][key]
        }
    })

    return systemConfig
}

// TODO: This needs to be done better (fails if locations of shit changes)
const mergeCache = (registry, cachedRegistry) => {
    return Object.assign({}, registry, cachedRegistry)
}

const fromCache = ({tree, registry}) => {
    return dehydrateCache().then(cachedRegistry => {
        return {tree, registry: mergeCache(registry, cachedRegistry)}
    })
}

/**
 * Convenience method to allow easy chaining
 * @param tree
 * @param registry
 * @returns {Promise.<{tree: *, registry: *}>}
 */
const toCache = ({tree, registry}) => {
    return hydrateCache(registry)
        .then(() => ({tree, registry}))
}

/**
 * Write registry to ./systemjs.cache
 * @param registry
 * @returns {Promise.<TResult>}
 */
const hydrateCache = (registry) => {
    return Promise.resolve(JSON.stringify(registry))
        .then(fs.write.bind(null, './systemjs.cache'))
}

/**
 * Construct registry from ./systemjs.cache
 * @returns {Promise.<TResult>}
 */
const dehydrateCache = () => {
    return fs.read('./systemjs.cache')
        .then(JSON.parse)
        .catch(e => {
            console.log("No cache, parsing node_modules. Warning this may take a while.")
            return {}
        })
}

exports.fs = fs

exports.getConfig =  async deps => {

  const mainPkg = {
    name: 'npm',
    version: '1.0.0',
    description: '',
    main: 'index.js',
    author: '',
    license: 'ISC',
    dependencies: {}
  }

  await Promise.all(deps.map(async dep => {
    await downloadDir(dep)
    let pkg = await fs.read(`node_modules/${dep}/package.json`)
    let depPkg = JSON.parse(pkg)
    mainPkg.dependencies[dep] = `^${depPkg.version}`
  }))
  await fs.write('package.json', JSON.stringify(mainPkg, null, 2))

  return traceModuleTree('.')
    // .then(fromCache)
    // .then(augmentModuleTree)
    // .then(toCache)
    // .then(pruneModuleTree)
    // .then(generateConfig)

}

exports.getConfig(['left-pad'])
  // .then(res => console.log(res))
  .then(config => require('fs').writeFileSync('config.json', JSON.stringify(config, null, 2)))

// traceModuleTree('.')
//   .then(fromCache)
//   .then(toCache)
//   .then(pruneModuleTree)
//   .then(generateConfig)
//   .then(res => console.log(JSON.stringify(res, null, 2)))
