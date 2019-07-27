const { spawn } = require('child_process')
const {
  colorLog,
  LEVEL
} = require('./colorsLog')
const { PREFIX } = require('./constants')

const printExecuteScript = (script) => {
  colorLog({
    level: LEVEL.INFO,
    prefix: PREFIX.EXECUTE,
    text: script
  })
  const execute = spawn(script, { shell: true, stdio: 'inherit' })
  return new Promise((resolve, reject) => {
    // execute.on('error', reject)
    execute.on('exit', code => {
      if (code === 1) {
        reject(code)
      }
      resolve()
    })
  })
}

const handleError = (action, args = []) => {
  action(...args)
    .catch(error => {
      if (error !== 1) {
        colorLog({
          level: LEVEL.ERROR,
          prefix: PREFIX.UNEXPECT_ERROR,
          text: error
        })
        process.exit(1)
      }
    })
}

module.exports = {
  handleError,
  printExecuteScript
}
