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
  const fluid = _.get(featuredimage, 'childImageSharp.fluid', {})
  return (
    <div className='card'>
      {fluid && <Img fluid={fluid} />}
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
      </div>
      <footer className='card-footer'>
        <Link
          className='card-footer-item'
          to={`/${category}/${postUrl}`}
        >
          See full post
        </Link>
      </footer>
    </div>
  )
}

PostCard.defaultProps = {
  frontmatter: {}
}

export default PostCard
