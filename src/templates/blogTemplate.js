import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import linkToIframe from '../helper/linkToIframe'
import './blogTemplate.css'

const Template = (props) => {
  const { markdownRemark } = props.data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const {
    title,
    description
  } = frontmatter
  console.log(props.data)
  return (
    <>
      <SEO
        title={title}
        description={description}
      />
      <div className='blog-post-container'>
        <div className='blog-post'>
          <div
            className='blog-post-content'
            dangerouslySetInnerHTML={{ __html: linkToIframe(html) }}
          />
        </div>
      </div>
    </>
  )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        description
      }
    }
  }
`