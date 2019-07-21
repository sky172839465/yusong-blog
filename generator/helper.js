const {
  colorLog,
  LEVEL
} = require('./colorsLog')
const { PREFIX } = require('./constants')

const handleError = (action, args = []) => {
  action(...args)
    .catch(error => {
      colorLog({
        level: LEVEL.ERROR,
        prefix: PREFIX.UNEXPECT_ERROR,
        text: error
      })
      process.exit(1)
    })
}

module.exports = {
  handleError
}
