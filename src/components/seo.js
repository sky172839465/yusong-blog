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
import { META_KEY, DEFAULT_META } from '../constants/defaultMeta'

const getOpenGraphMetaList = (meta = {}) => {
  const { keywords, type, siteUrl, path, title, description, siteName, image } = {
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
      content: path ? `${DEFAULT_META[META_KEY.SITE_URL]}${path}` : siteUrl
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
    },
    {
      property: 'fb:app_id',
      content: '1555868404551950'
    }
  ]
}
const getTwitterMetaList = (meta = {}) => {
  const { title, image, description } = {
    ...DEFAULT_META,
    ...meta
  }
  const AT_ME = `@${DEFAULT_META[META_KEY.ID]}`
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
      content: description
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

const SEO = ({ description, lang, meta, title, author, path, type }) => {
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

  const customizeMeta = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    author: author || site.siteMetadata.author,
    type: type || DEFAULT_META[META_KEY.TYPE],
    path
  }
  const currentMetaList = [
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
      meta={currentMetaList.concat(meta)}
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
