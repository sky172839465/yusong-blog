/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const defaultMetaList = [
  {
    property: `og:type`,
    content: `website`
  },
  {
    name: `twitter:card`,
    content: `summary`
  }
]

const SEO = ({ description, lang, meta, title, author, path }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaAuthor = author || site.siteMetadata.author
  const currentMetaList = [
    // title
    {
      property: `og:title`,
      content: metaTitle
    },
    {
      name: `twitter:title`,
      content: metaTitle
    },
    // desc
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      name: `twitter:description`,
      content: metaDescription
    },
    // author
    {
      name: `author`,
      content: metaAuthor
    },
    {
      name: `twitter:creator`,
      content: metaAuthor
    },
    // url
    {
      name: `og:url`,
      content: `https://yusong.io${path}`
    }
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={defaultMetaList.concat(currentMetaList, meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  path: ``,
  author: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  path: PropTypes.string,
  author: PropTypes.string
}

export default memo(SEO)
