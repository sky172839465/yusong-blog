import React from 'react'
import _ from 'lodash'
import { Link, useStaticQuery, graphql } from 'gatsby'

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
      {data.allMarkdownRemark.edges.map(({ node: { id, frontmatter } }) => {
        const {
          category,
          title,
          description,
          date
        } = frontmatter
        const postUrl = _.flow(
          _.toLower,
          _.kebabCase
        )(title)
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
              <Link to={`/${category}/${postUrl}`}>
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
