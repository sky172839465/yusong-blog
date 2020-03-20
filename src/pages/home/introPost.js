import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import FullWidthArea from '../../components/fullWidthArea'

const IntroArea = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
`

const IntroPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          frontmatter: {
            category: {
              eq: "home"
            }
          }
        },
        sort: {
          order: DESC,
          fields: frontmatter___date
        }
      ) {
        edges {
          node {
            body
          }
        }
      }
    }
  `)
  return (
    <FullWidthArea className='has-background-light'>
      <IntroArea>
        <MDXRenderer>{data.allMdx.edges[0].node.body}</MDXRenderer>
      </IntroArea>
    </FullWidthArea>
  )
}

export default IntroPost
