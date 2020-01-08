import React from 'react'
import clx from 'classnames'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import NoteCard from './NoteCard'

const NotePage = props => {
  const notes = props.data.allMarkdownRemark.edges
  return (
    <>
      <SEO
        title='Note'
        description='Write down something I should remember...'
        path={props.path}
      />
      <div className={clx(
        'columns',
        'is-full-mobile',
        'is-half-tablet',
        'is-one-third-desktop'
      )}>
        {
          notes.map(({ node: { id, frontmatter } }) => {
            return (
              <div key={id} className='column'>
                <NoteCard frontmatter={frontmatter} />
              </div>
            )
          })
        }
      </div>
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
