import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import PreviewCard from '../../components/previewCard'

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
              <PreviewCard edge={edge} />
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
            tags
          }
        }
      }
    }
  }
`
