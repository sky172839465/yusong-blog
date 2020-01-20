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
import DEFAULT_META from '../constants/defaultMeta'

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

const getOpenGraphMetaList = (meta = {}) => {
  const { keywords, type, url, path, title, description, siteName, image } = {
    ...DEFAULT_META,
    ...meta
  }
  return [
    {
      name: 'keywords',
      content: keywords
    },
    {
      property: 'og:type',
      content: type
    },
    {
      property: 'og:url',
      content: path ? `${DEFAULT_META.url}${path}` : url
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:site_name',
      content: siteName
    },
    {
      property: 'og:image',
      content: image
    }
  ]
}
const getTwitterMetaList = (meta = {}) => {
  const { title, image } = {
    ...DEFAULT_META,
    ...meta
  }
  const AT_ME = `@${DEFAULT_META.id}`
  return [
    {
      property: 'twitter:site',
      content: AT_ME
    },
    {
      property: 'twitter:creator',
      content: AT_ME
    },
    {
      property: 'twitter:title',
      content: title
    },
    {
      property: 'twitter:description',
      content: title
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:widgets:new-embed-design',
      content: 'on'
    },
    {
      property: 'twitter:image:src',
      content: image
    }
  ]
}

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
  const customizeMeta = {
    title: metaTitle,
    description: metaDescription,
    author: metaAuthor
  }
  const currentMetaList = [
    {
      name: `description`,
      content: metaDescription
    },
    {
      name: `author`,
      content: metaAuthor
    },
    ...getOpenGraphMetaList(customizeMeta),
    ...getTwitterMetaList(customizeMeta)
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
