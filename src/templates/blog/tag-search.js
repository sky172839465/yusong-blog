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
  const { edges } = props.data.allMarkdownRemark
  const { tag } = props.pageContext
  return (
    <>
      <SEO
        title={`Search tag: ${tag}`}
        description={`Tag "${tag}" posts`}
        path={props.path}
      />
      <Title>
        Tagged "{tag}" posts
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
    allMarkdownRemark(
      filter: {
        frontmatter: {
          tags: {
            regex: $searchTagName
          }
        }
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
