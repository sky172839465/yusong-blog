export const getPagePathFromEdge = edge => {
  const {
    node: {
      frontmatter: {
        category
      },
      fields: { slug }
    }
  } = edge
  return `/${category}${slug}`
}
