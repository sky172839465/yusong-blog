import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import FullWidthArea from '../../components/fullWidthArea'

const IntroArea = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
`

const IntroPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
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
            html
          }
        }
      }
    }
  `)
  return (
    <FullWidthArea className='has-background-light'>
      <IntroArea dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
    </FullWidthArea>
  )
}

export default IntroPost
