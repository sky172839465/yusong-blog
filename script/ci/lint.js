const {
  handleError,
  printExecuteScript
} = require('../helper')
const {
  colorLog,
  LEVEL
} = require('../colorsLog')

const lint = async () => {
  await printExecuteScript('npm run lint')
  colorLog({
    level: LEVEL.INFO,
    prefix: 'Lint',
    text: `💯 Lint perfect`
  })
}

handleError(lint)
