import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import PostCard from './postCard'

const BlogPage = props => {
  const posts = props.data.allMarkdownRemark.edges
  return (
    <>
      <SEO
        title='Blog'
        description='Records about frontend development post !'
        path={props.path}
      />
      {
        posts.map(({ node: { id, frontmatter } }) => {
          return (
            <div key={id} className='column'>
              <PostCard frontmatter={frontmatter} />
            </div>
          )
        })
      }
    </>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: {
            eq: "blog"
          }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            category
            title
            date(formatString: "YYYY/MM/DD HH:mm:ss")
            description
            tags
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
