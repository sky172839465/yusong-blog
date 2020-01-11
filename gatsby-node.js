const path = require(`path`)
const _ = require(`lodash`)

// exports.onCreateNode = ({ node }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     console.log(node.internal.type)
//   }
// }

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              category
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { frontmatter: { category, title } } = node
      switch (category) {
        case 'blog':
        case 'note': {
          const postUrl = _.flow(
            _.toLower,
            _.kebabCase
          )(title)
          createPage({
            path: `/${category}/${postUrl}`,
            component: blogPostTemplate,
            context: {
              category,
              title
            } // additional data can be passed via context
          })
          break
        }
        default:
          break
      }
    })
  })
}
