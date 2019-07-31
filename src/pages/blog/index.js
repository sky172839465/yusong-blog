import React from 'react'
import clx from 'classnames'
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
      <div className={clx(
        'columns',
        'is-full-mobile',
        'is-half-tablet',
        'is-one-third-desktop'
      )}>
        {
          posts.map(({ node: { id, frontmatter } }) => {
            return (
              <div key={id} className='column'>
                <PostCard frontmatter={frontmatter} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: {
            eq: "blog-post"
          }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
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
