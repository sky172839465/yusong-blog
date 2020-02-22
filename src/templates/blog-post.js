import React from 'react'
import _ from 'lodash'
import clx from 'classnames'
import styled from 'styled-components'
import { graphql } from 'gatsby'
// import { remarkForm } from 'gatsby-tinacms-remark'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import FullWidthArea from '../components/fullWidthArea'
import ImageCaption from '../components/imageCaption'

const PostHeader = styled.h1`
  margin-top: 1.5rem;
`

const BlogPost = (props) => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  const {
    title,
    description,
    featuredimage,
    imageHostName,
    imageHostUrl,
    tags
  } = frontmatter
  const { fluid } = _.get(featuredimage, 'childImageSharp', {})
  return (
    <>
      <SEO
        title={title}
        description={description}
        path={props.path}
        type='article'
      />
      <FullWidthArea>
        <div
          className={clx(
            'title',
            'has-text-centered',
            'has-text-dark'
          )}
        >
          <PostHeader>
            {title}
          </PostHeader>
        </div>
        {
          fluid && (
            <>
              <Img fluid={fluid} />
              {
                imageHostName &&
                <ImageCaption
                  imageHostName={imageHostName}
                  imageHostUrl={imageHostUrl}
                />
              }
            </>
          )
        }
        <br />
      </FullWidthArea>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className='tags'>
        {
          tags.map(tag => (
            <span key={tag} className='tag is-light'>
              {tag}
            </span>
          ))
        }
      </div>
    </>
  )
}

export default BlogPost
// export default remarkForm(BlogPost)

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date,
        title,
        description,
        tags,
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
      # ...TinaRemark
    }
  }
`
