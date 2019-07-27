const {
  handleError,
  printExecuteScript
} = require('../helper')
const {
  colorLog,
  LEVEL
} = require('../colorsLog')

const deploy = async () => {
  const scripts = [
    'npm run build',
    'npm run deploy -- --prod --message "Deploy website by CI 🤖"'
  ]
  for (const script of scripts) {
    await printExecuteScript(script)
  }
  colorLog({
    level: LEVEL.INFO,
    prefix: 'Deploy',
    text: '✅ Deploy success'
  })
}

handleError(deploy)
