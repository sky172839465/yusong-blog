import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const postCard = ({ frontmatter }) => {
  const {
    title,
    description,
    date,
    path,
    featuredimage
  } = frontmatter
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
        <Link className='card-footer-item' to={path}>See full post</Link>
      </footer>
    </div>
  )
}

postCard.defaultProps = {
  frontmatter: {}
}

export default postCard
