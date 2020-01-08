import React from 'react'
import { graphql } from 'gatsby'
import clx from 'classnames'
import SEO from '../../components/seo'
import PostCard from './PostCard'

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
