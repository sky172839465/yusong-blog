const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const _ = require('lodash')
const generateShareImage = require('./generator/imageInShareLink')

exports.createPages = async ({ actions, graphql }) => {
  await generateBlogPostPage(actions, graphql)
  await generateBlogTagSearchPage(actions, graphql)
}

/**
 * generate slug
 * https://www.gatsbyjs.org/docs/creating-slugs-for-pages/
 */
exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }

  // generate share link image
  if (node.frontmatter) {
    await generateShareImageByCategory(node)
  }
}

const generateBlogPostPage = async (actions, graphql) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog/post.js`)
  const result = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
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

  const { edges } = result.data.allMdx
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
      allMdx(
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

  const { edges } = result.data.allMdx
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

const generateShareImageByCategory = async (node) => {
  switch (node.frontmatter.category) {
    case 'blog':
    case 'note': {
      const {
        fileAbsolutePath,
        frontmatter: { category, title }
      } = node
      const templateFolder = path.join(__dirname, './template/blog/post')
      const imageInfo = {
        targetFolder: path.parse(fileAbsolutePath).dir,
        templateFolder,
        title,
        websiteUrl: '🔗 YUSONG.IO'
      }
      if (category === 'blog') {
        imageInfo.category = '📓 BLOG'
      } else if (category === 'note') {
        imageInfo.category = '📓 NOTE'
      }
      await generateShareImage(imageInfo)
      break
    }
    default:
      break
  }
}
