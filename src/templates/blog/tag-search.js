import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import PreviewCard from '../../components/previewCard'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  margin-top: 1.5rem;
`

const BlogPost = (props) => {
  const { edges } = props.data.allMdx
  const { tag } = props.pageContext
  const description = `Tagged "${tag}" posts`
  return (
    <>
      <SEO
        title={`Search tag: ${tag}`}
        description={description}
        path={props.path}
      />
      <Title>
        {description}
      </Title>
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

export default BlogPost

export const pageQuery = graphql`
  query($searchTagName: String) {
    allMdx(
      filter: {
        frontmatter: {
          tags: {
            regex: $searchTagName
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
