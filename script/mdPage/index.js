const fs = require('fs')
const { handleError } = require('../helper')
const { colorLog, LEVEL } = require('../colorsLog')
const { PREFIX } = require('../constants')
const template = require('./template')

const generator = async () => {
  const fileName = process.argv[2]
  if (!fileName) {
    colorLog({
      level: LEVEL.ERROR,
      prefix: PREFIX.NOT_FOUND,
      text: `FileName: ${fileName}.`
    })
    return
  }
  const filePath = `src/markdown-pages/${fileName}.md`
  fs.writeFileSync(filePath, template({ title: fileName }))
  colorLog({
    level: LEVEL.INFO,
    prefix: PREFIX.FILE,
    text: `${filePath} has been created.`
  })
}

handleError(generator)
