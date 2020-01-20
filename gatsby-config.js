const _ = require('lodash')
const { DEFAULT_META } = require('./src/constants/defaultMeta')

const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`
  }
}

const SITE_META_LIST = [
  'title',
  'description',
  'author'
]

module.exports = {
  siteMetadata: _.pick(DEFAULT_META, SITE_META_LIST),
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `YUSONG.IO`,
        short_name: `yusong-blog`,
        start_url: `/`,
        background_color: `#333f4f`,
        theme_color: `#333f4f`,
        display: `minimal-ui`,
        icon: `src/images/yusong.io.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md-pages/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md-pages/note`,
        name: `note`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img/`,
        name: `media`
      }
    },
    netlifyCmsPaths,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `media`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 620,
              backgroundColor: `transparent`
            }
          },
          {
            resolve: `gatsby-remark-embed-gist`,
            options: {
              // the github handler whose gists are to be accessed
              username: `weirdpattern`,
              includeDefaultCss: true
            }
          },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              // usePrefix defaults to false
              // usePrefix: true is the same as ["oembed"]
              usePrefix: false,
              providers: {
                // Important to exclude providers
                // that adds js to the page.
                // If you do not need them.
              }
            }
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/index.js`)
      }
    },
    {
      resolve: `gatsby-plugin-tinacms`,
      options: {
        plugins: [
          `gatsby-tinacms-git`,
          `gatsby-tinacms-remark`
        ],
        sidebar: {
          position: `displace`,
          hidden: process.env.NODE_ENV === `production`
        }
      }
    }
    // {
    //   resolve: 'gatsby-plugin-netlify-cms',
    //   options: {
    //     modulePath: `${__dirname}/src/cms/index.js`
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
