import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { getPagePathFromEdge } from '../helper/pathHelper'

const Card = styled.div`
  margin-bottom: .5rem;
`

const PreviewCard = ({ edge }) => {
  const {
    node: {
      frontmatter
    }
  } = edge
  const {
    title,
    description,
    date,
    banner,
    imageInShareLink
  } = frontmatter
  const pagePath = getPagePathFromEdge(edge)
  const fluid = banner
    ? banner.childImageSharp.fluid
    : imageInShareLink.childImageSharp.fluid
  return (
    <Card className='card'>
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
        <Link to={pagePath}>
          Read more
        </Link>
      </div>
    </Card>
  )
}

export default PreviewCard
