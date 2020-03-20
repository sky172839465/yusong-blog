import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import PreviewCard from '../../components/previewCard'

const BlogPage = props => {
  const { edges } = props.data.allMdx
  return (
    <>
      <SEO
        title='Blog'
        description='Records about frontend development post !'
        path={props.path}
      />
      {
        edges.map(edge => {
          return (
            <div key={edge.node.id} className='column'>
              <PreviewCard edge={edge} />
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
    allMdx(
      filter: {
        frontmatter: {
          category: {
            eq: "blog"
          }
        }
      },
      sort: {
        order: DESC
        fields: frontmatter___date
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            category
            title
            date(formatString: "YYYY/MM/DD HH:mm:ss")
            description
            tags
            banner {
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
