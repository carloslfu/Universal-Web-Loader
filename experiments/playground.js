const {convertPackage} = require('jspm-npm/lib/node-conversion')
const fs = require('fs')

let config = JSON.parse(fs.readFileSync('node_modules/fractal-core/package.json'))
config.augmented = false

;(async () => {
  let convPkg = await convertPackage(config, ':fractal-core', './node_modules/fractal-core', console)
  console.log(JSON.stringify(convPkg, null, 2))
})()
