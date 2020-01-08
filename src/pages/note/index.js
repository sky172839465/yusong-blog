import React from 'react'
import { Link } from 'gatsby'
import SEO from '../../components/seo'

const SettingPage = props => (
  <>
    <SEO
      title='Note'
      description='Write down something I should remember...'
      path={props.path}
    />
    <h1>Hi from the Setting page</h1>
    <p>Welcome to Setting</p>
    <Link to='/'>Go back to the homepage</Link>
  </>
)

export default SettingPage
