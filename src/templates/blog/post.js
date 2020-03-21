import React from 'react'
import _ from 'lodash'
import clx from 'classnames'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
// import { remarkForm } from 'gatsby-tinacms-remark'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import Markdown from 'react-markdown'
import Img from 'gatsby-image'
import SEO from '../../components/seo'
import Title from '../../components/title'
import FullWidthArea from '../../components/fullWidthArea'
import ImageCaption from '../../components/imageCaption'
import './post.css'

const TagsArea = styled.div`
  span {
    margin-right: .5rem;
  }
`

const BlogPost = (props) => {
  const { mdx } = props.data
  const { frontmatter } = mdx
  const {
    title,
    description,
    banner,
    bannerCredit,
    imageInShareLink,
    tags
  } = frontmatter
  const { fluid } = _.get(banner, 'childImageSharp', {})
  return (
    <>
      <SEO
        title={title}
        description={description}
        path={props.path}
        image={imageInShareLink.childImageSharp.fluid.src}
        type='article'
      />
      <article className='md-post'>
        <FullWidthArea>
          <div
            className={clx(
              'title',
              'has-text-centered',
              'has-text-dark'
            )}
          >
            <Title>{title}</Title>
          </div>
          {
            fluid && (
              <>
                <Img fluid={fluid} />
                {
                  bannerCredit &&
                  <ImageCaption>
                    <Markdown linkTarget='_blank'>{bannerCredit}</Markdown>
                  </ImageCaption>
                }
              </>
            )
          }
          <br />
        </FullWidthArea>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <TagsArea className='tags'>
          {
            tags.map(tag => (
              <Link key={tag} to={`/blog/tags/${tag}`}>
                <span className='tag is-light'>
                  {tag}
                </span>
              </Link>
            ))
          }
        </TagsArea>
      </article>
    </>
  )
}

export default BlogPost
// export default remarkForm(BlogPost)

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        date,
        title,
        description,
        tags,
        bannerCredit,
        banner {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 300) {
            # fluid(maxWidth: 1200, quality: 90) {
              # aspectRatio
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageInShareLink {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 630) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      # ...TinaRemark
    }
  }
`
