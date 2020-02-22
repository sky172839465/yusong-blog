import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { getPagePathFromEdge } from '../../helper/pathHelper'

const PostCard = ({ edge }) => {
  const {
    title,
    description,
    date,
    featuredimage
  } = edge.node.frontmatter
  const pagePath = getPagePathFromEdge(edge)
  return (
    <div className='card'>
      {featuredimage && <Img fluid={featuredimage.childImageSharp.fluid} />}
      <div className='card-content'>
        <div className='media-content'>
          <p className='title is-4 has-text-dark'>{title}</p>
          <p className='subtitle is-6'>
            <time dateTime={date}>{date}</time>
          </p>
        </div>
        <div className='content'>
          {description}
        </div>
        <Link to={pagePath}>
            Read more
        </Link>
      </div>
    </div>
  )
}

PostCard.defaultProps = {
  frontmatter: {}
}

export default PostCard
