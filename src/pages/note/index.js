import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import NoteCard from './noteCard'

const NotePage = props => {
  const { edges } = props.data.allMarkdownRemark
  return (
    <>
      <SEO
        title='Note'
        description='Write down something I should remember...'
        path={props.path}
      />
      {
        edges.map((edge) => {
          return (
            <div key={edge.node.id} className='column'>
              <NoteCard edge={edge} />
            </div>
          )
        })
      }
    </>
  )
}

export default NotePage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: {
            eq: "note"
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
            tags
          }
        }
      }
    }
  }
`
