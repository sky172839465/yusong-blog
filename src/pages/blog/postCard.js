import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const PostCard = ({ frontmatter }) => {
  const {
    category,
    title,
    description,
    date,
    featuredimage
  } = frontmatter
  const postUrl = _.flow(
    _.toLower,
    _.kebabCase
  )(title)
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
        <Link to={`/${category}/${postUrl}`}>
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
