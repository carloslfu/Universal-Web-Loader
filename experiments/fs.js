// const idb = require('idb')
const path = require('./path')

// const fsPromise = idb.open('fs-db', 1, upgradeDB => {
//     upgradeDB.createObjectStore('fs')
// })

// Key -Value Store for FS
// const kv = {
//   get: (key) => fsPromise.then(
//     db => db.transaction('fs')
//       .objectStore('fs').get(key)
//   ),
//   set: (key, val) => fsPromise.then(
//     db => {
//       const tx = db.transaction('fs', 'readwrite')
//       tx.objectStore('fs').put(val, key)
//       return tx.complete
//     }
//   ),
//   delete: (key) => fsPromise.then(
//     db => {
//       const tx = db.transaction('fs', 'readwrite')
//       tx.objectStore('fs').delete(key)
//       return tx.complete
//     }
//   ),
//   clear: () => fsPromise.then(
//     db => {
//       const tx = db.transaction('fs', 'readwrite')
//       tx.objectStore('fs').clear()
//       return tx.complete
//     }
//   ),
//   keys: () => fsPromise.then(
//     db => {
//       const tx = db.transaction('fs')
//       const keys = []
//       const store = tx.objectStore('fs')

//       // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
//       // openKeyCursor isn't supported by Safari, so we fall back
//       (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
//           if (!cursor) return
//           keys.push(cursor.key)
//           cursor.continue()
//       })

//       return tx.complete.then(() => keys)
//     }
//   ),
// }

const createKV = name => {

  const kv = {}

  return {
    kv,
    get: (key) => {
      let obj = kv[key]
      return Promise.resolve(obj)
    },
    set: (key, val) => {
      kv[key] = val
      return Promise.resolve()
    },
    delete: (key) => {
      delete kv[key]
      return Promise.resolve()
    },
    clear: () => {
      kv = {}
      return Promise.resolve()
    },
    keys: () => {
      return Promise.resolve(Object.keys(kv))
    },
  }
}

const files = createKV('files')

exports.files = files

// FS Functions

const getName = path => {
  let parts = path.split('/')
  return parts[parts.length - 1]
}

exports.getName = getName

const getPath = path => {
  let parts = path.split('/')
  return parts.slice(0, parts.length - 1).join('/')
}

exports.getPath = getPath

exports.read = async name => {
  let normName = path.normalize(name)
  try {
    let file = await files.get(normName)
    return file ? file.contents : undefined
  } catch (err) {
    throw err
  }
}

exports.write = async (name, obj, stat = {}) => {
  stat.size = typeof obj === 'string' ? obj.length : JSON.stringify(obj).length
  let normName = path.normalize(name)
  await createPathAddStats(getPath(normName), stat)
  return await files.set(normName, {
    contents: obj,
    ...stat,
  })
}

exports.mkdir = async (name, stat = {}) => {
  let normName = path.normalize(name)
  return await files.set(normName, {
    dir: true,
    ...stat,
  })
}

const createPathAddStats = async (pathName, stat) => {
  if (pathName === '') return
  let parts = path.normalize(pathName).split('/')
  for (let i = 0, part, str = ''; part = parts[i]; i++) {
    str += (i === 0 ? '' : '/') + part
    let dir = await files.get(str)
    await files.set(str, {
      ...dir,
      size: dir ? dir.size + stat.size : stat.size,
      dir: true,
    })
  }
}

exports.delete = async (name, obj) => {
  let normName = path.normalize(name)
  return await files.delte(normName)
}

exports.list = async name => {
  let fileNames = await files.keys()
  let normName = name ? path.normalize(name) : ''
  if (normName === '.') {
    normName = ''
  }
  return fileNames
    .filter(n => normName ? n.startsWith(normName + '/') : true)
    .map(n => normName ? n.slice(normName.length + 1) : n)
    .filter(n => n.indexOf('/') === - 1)
}

exports.stat = async name => {
  let normName = path.normalize(name)
  return await files.get(normName)
}

exports.exists = async name => {
  let normName = path.normalize(name)
  let fileNames = await exports.list()
  return fileNames.indexOf(normName) !== -1
}

exports.realpath = async path => '/' + path
