const fs = require('./fs')
const path = require('./path')

require('es6-promise').polyfill()
require('isomorphic-fetch')

// Unpkg dowload
const downloadDir = async (name) => {
  let meta = await fetch(`https://unpkg.com/${name}/?meta`).then(r => r.json())
  let files = meta.files
  await Promise.all(files.map(async file => {
    let filePath = `${name}/${fs.getName(file.path)}`
    if (file.type === 'file') {
      let src = await fetch(`https://unpkg.com/${filePath}`).then(r => r.text())
      delete file.path
      delete file.type
      delete file.integrity
      await fs.write(`node_modules/${filePath}`, src, file)
      console.log(`node_modules/${filePath}`)
    } else {
      // Directory
      await downloadDir(`${filePath}`, 'node_modules')
    }
  }))
  if (name.indexOf('/') === -1) {
    // Download dependencies
    let pkgJSON = JSON.parse(await fs.read(path.join('node_modules', name, 'package.json')))
    await Promise.all(Object.keys(pkgJSON.dependencies || {}).map(downloadDir))
  }
}

exports.downloadDir = downloadDir
