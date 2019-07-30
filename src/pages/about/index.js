import React from 'react'
import { Link } from 'gatsby'
import SEO from '../../components/seo'

const AboutPage = props => (
  <>
    <SEO
      title='About'
      description={`I'm a frontend developer and animation lover !`}
      path={props.path}
    />
    <h1>Hi from the About page</h1>
    <p>Welcome to About</p>
    <Link to='/'>Go back to the homepage</Link>
  </>
)

export default AboutPage
