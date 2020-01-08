import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'

const NoteCard = ({ frontmatter }) => {
  const {
    category,
    title,
    description,
    date
  } = frontmatter
  const noteUrl = _.flow(
    _.toLower,
    _.kebabCase
  )(title)
  return (
    <Link
      className='card-footer-item'
      to={`/${category}/${noteUrl}`}
    >
      <div className='card'>
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
      </div>
    </Link>
  )
}

NoteCard.defaultProps = {
  frontmatter: {}
}

export default NoteCard
