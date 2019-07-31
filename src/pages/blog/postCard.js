import React from 'react'
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
  return (
    <div className='card'>
      <Img fluid={featuredimage.childImageSharp.fluid} />
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

export default postCard
