import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const BlogPage = props => (
  <>
    <SEO
      title='Blog'
      description='Records frontend tech post, these post will sync to Medium !'
      path={props.path}
    />
    <h1>Hi from the BlogPage</h1>
    <p>Welcome to page 2</p>
    <Link to='/'>Go back to the homepage</Link>
  </>
)

export default BlogPage
