import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { getPagePathFromEdge } from '../../helper/pathHelper'

const LastestPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
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
      {data.allMarkdownRemark.edges.map(edge => {
        const {
          node: {
            id,
            frontmatter
          }
        } = edge
        const {
          title,
          description,
          date
        } = frontmatter
        const pagePath = getPagePathFromEdge(edge)
        return (
          <div key={id} className='card'>
            <div className='card-content'>
              <div className='media-content'>
                <p className='title is-4 has-text-dark'>{title}</p>
                <p className='subtitle is-6'>
                  <time dateTime={date}>{date}</time>
                </p>
              </div>
              <div className='content'>
                {description}
              </div>
              <Link to={pagePath}>
                Read more
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default LastestPosts
