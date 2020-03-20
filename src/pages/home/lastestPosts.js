import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PreviewCard from '../../components/previewCard'

const LastestPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          frontmatter: {
            category: {
              in: ["blog", "note"]
            }
          }
        },
        sort: {
          order: DESC
          fields: frontmatter___date
        },
        limit: 3
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
            }
          }
        }
      }
    }
  `)
  return (
    <>
      {data.allMdx.edges.map(edge => {
        return (
          <div key={edge.node.id} className='column'>
            <PreviewCard edge={edge} />
          </div>
        )
      })}
    </>
  )
}

export default LastestPosts
