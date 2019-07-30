import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../../components/seo'

const BlogPage = props => {
  console.log(props)
  return (
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
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter:{frontmatter:{path:{regex:"/^\/blog\/post\//"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            description
            tags
          }
        }
      }
    }
  }
`
