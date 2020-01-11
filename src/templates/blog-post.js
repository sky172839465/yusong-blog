import React from 'react'
import clx from 'classnames'
import { graphql } from 'gatsby'
// import { remarkForm } from 'gatsby-tinacms-remark'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import FullWidthArea from '../components/fullWidthArea'
import ImageCaption from '../components/imageCaption'

const BlogPost = (props) => {
  const { markdownRemark } = props.data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const {
    title,
    description,
    featuredimage,
    imageHostName,
    imageHostUrl
  } = frontmatter
  const { fluid } = featuredimage.childImageSharp
  return (
    <>
      <SEO
        title={title}
        description={description}
        path={props.path}
      />
      {
        fluid && (
          <FullWidthArea>
            <h1
              className={clx(
                'title',
                'has-text-centered',
                'has-text-dark'
              )}
            >
              {title}
            </h1>
            <Img fluid={fluid} />
            {
              imageHostName &&
              <ImageCaption
                imageHostName={imageHostName}
                imageHostUrl={imageHostUrl}
              />
            }
            <br />
          </FullWidthArea>
        )
      }
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export default BlogPost
// export default remarkForm(BlogPost)

export const pageQuery = graphql`
  query($category: String!, $title: String!) {
    markdownRemark(frontmatter: {
      category: { eq: $category },
      title: { eq: $title }
    }) {
      id
      html
      frontmatter {
        date,
        title,
        description,
        imageHostName,
        imageHostUrl,
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      ...TinaRemark
    }
  }
`
