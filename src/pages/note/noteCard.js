import React from 'react'
import { Link } from 'gatsby'
import { getPagePathFromEdge } from '../../helper/pathHelper'

const NoteCard = ({ edge }) => {
  const {
    title,
    description,
    date
  } = edge.node.frontmatter
  const pagePath = getPagePathFromEdge(edge)
  return (
    <Link
      className='card-footer-item'
      to={pagePath}
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
