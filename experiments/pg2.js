var fs = require('./fs')
const {convertPackage} = require('./node-conversion')
const {downloadDir} = require('./pkg')

exports.run = (async () => {

  await downloadDir('left-pad')

  console.log(fs.files.kv)

  let config = JSON.parse(await fs.read('node_modules/left-pad/package.json'))
  config.augmented = false

  let convPkg = await convertPackage(config, ':left-pad', './node_modules/left-pad', console)
  console.log(JSON.stringify(convPkg, null, 2))
})

exports.run()
