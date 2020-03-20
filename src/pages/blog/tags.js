import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import _ from 'lodash'
import { FaTags } from 'react-icons/fa'
import SEO from '../../components/seo'
import Title from '../../components/title'
import Icon from '../../components/icon'

const title = 'Tags'

const TagsArea = styled.div`
  span {
    margin: .7rem;
  }
`

const TagsPage = props => {
  const { edges } = props.data.allMdx
  let totalTags = []
  for (const edge of edges) {
    const { tags } = edge.node.frontmatter
    totalTags = totalTags.concat(tags)
  }
  totalTags = _.uniq(totalTags)
  return (
    <>
      <SEO
        title={title}
        description='Blog tags page.'
        path={props.path}
      />
      <Title>
        <Icon component={FaTags} size='2rem' /> {title}
      </Title>
      <TagsArea className='tags'>
        {
          totalTags.map(tag => {
            return (
              <Link key={tag} to={`/blog/tags/${tag}`}>
                <span className='tag is-large is-light'>
                  {tag}
                </span>
              </Link>
            )
          })
        }
      </TagsArea>
    </>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: {
          category: {
            eq: "blog"
          }
        }
      },
      sort: {
        order: DESC
        fields: frontmatter___tags
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
`
