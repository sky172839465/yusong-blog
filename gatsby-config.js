const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`
  }
}

module.exports = {
  siteMetadata: {
    title: `YUSONG.IO`,
    description: `Records something about frontend development !`,
    author: `Yusong Hsu`
  },
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
        component: require.resolve(`./src/components/layout.js`)
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/index.js`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
