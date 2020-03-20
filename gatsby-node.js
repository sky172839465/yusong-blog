const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const _ = require('lodash')

exports.createPages = async ({ actions, graphql }) => {
  await generateBlogPostPage(actions, graphql)
  await generateBlogTagSearchPage(actions, graphql)
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

const generateBlogPostPage = async (actions, graphql) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog/post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
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

const generateBlogTagSearchPage = async (actions, graphql) => {
  const { createPage } = actions
  const tagSearchTemplate = path.resolve(`src/templates/blog/tag-search.js`)
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            category: {
              eq: "blog"
            }
          }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              tags
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
  let totalTags = []
  for (const edge of edges) {
    const { tags } = edge.node.frontmatter
    totalTags = totalTags.concat(tags)
  }
  totalTags = _.uniq(totalTags)
  for (const tag of totalTags) {
    createPage({
      path: `/blog/tags/${tag}`,
      component: tagSearchTemplate,
      context: {
        tag,
        searchTagName: `/${tag}/`
      }
    })
  }
}
