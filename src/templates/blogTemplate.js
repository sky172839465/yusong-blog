import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import _ from 'lodash'
import SEO from '../components/seo'
import FullWidthArea from '../components/fullWidthArea'
import ImageCaption from '../components/imageCaption'

const Template = (props) => {
  const { markdownRemark } = props.data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const {
    title,
    description,
    featuredimage,
    hostName,
    hostUrl
  } = frontmatter
  const fluid = _.get(featuredimage, 'childImageSharp.fluid', {})
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
            <Img fluid={fluid} />
            {
              hostName &&
              <ImageCaption
                hostName={hostName}
                hostUrl={hostUrl}
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

export default Template

export const pageQuery = graphql`
  query($category: String!, $title: String!) {
    markdownRemark(frontmatter: {
      category: { eq: $category },
      title: { eq: $title }
    }) {
      html
      frontmatter {
        date,
        title,
        description,
        hostName,
        hostUrl,
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
