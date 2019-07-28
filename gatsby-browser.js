const React = require('react')
const Layout = require('./src/components/layout').default
require('./src/styles/bulma/index.scss')

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
