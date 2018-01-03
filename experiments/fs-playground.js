var fs = require('./fs')
var path = require('./path')
var readdirp = require('./readdirp')
// var readdirp = require('readdirp')

;(async () => {
  for (let name of ['a', 'b', 'c', 'd']) {
    await fs.write(`${name}.js`, name)
  }
  for (let dir of ['f1', 'f2', 'f3', 'f4']) {
    for (let name of ['a1', 'b1', 'c1', 'd1']) {
      await fs.write(`${dir}/${name}.js`, name)
    }
  }
  let fileTree = []
  await new Promise((resolve, reject) => readdirp({
    root: '.',
    entryType: 'both',
  }, function(entry) {
    console.log(entry)
    console.log()
    var listingName = entry.path.replace(/\\/g, '/');
    if (entry.stat.dir)
      listingName += '/';
    fileTree[listingName] = true;
  }, function(err) {
    if (err)
      reject(err);
    else
      resolve(fileTree);
  }))

  console.log(fileTree)

})()

