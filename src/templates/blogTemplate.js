import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

const Template = (props) => {
  const { markdownRemark } = props.data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const {
    title,
    description
  } = frontmatter
  return (
    <>
      <SEO
        title={title}
        description={description}
        path={props.path}
      />
      <div className='blog-post-container'>
        <div className='blog-post'>
          <div
            className='blog-post-content'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  )
}

export default Template

export const pageQuery = graphql`
  query($category: String!, $title: String!) {
    markdownRemark(frontmatter: {
      category: { eq: $category },
      title: { eq: $title }
    }) {
      html
      frontmatter {
        date
        title
        description
      }
    }
  }
`
