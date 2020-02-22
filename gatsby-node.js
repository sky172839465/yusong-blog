const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const { edges } = result.data.allMarkdownRemark
  for (const edge of edges) {
    const {
      node: {
        fields: { slug },
        frontmatter: { category, title }
      }
    } = edge
    switch (category) {
      case 'blog':
      case 'note': {
        createPage({
          path: `/${category}${slug}`,
          component: blogPostTemplate,
          context: {
            category,
            title,
            slug
          } // additional data can be passed via context
        })
        break
      }
      default:
        break
    }
  }
}

/**
 * generate slug
 * https://www.gatsbyjs.org/docs/creating-slugs-for-pages/
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}
