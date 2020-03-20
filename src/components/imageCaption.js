import React from 'react'
import styled from 'styled-components'
import clx from 'classnames'

const StyledFigcaption = styled.figcaption`
  padding: .2rem 0;
`

const ImageCaption = ({ children, ...props }) => (
  <StyledFigcaption
    className={clx(
      'has-text-centered',
      'has-text-dark',
      'is-size-7'
    )}
    {...props}
  >
    {/* Photo by <a target='block' href={imageHostUrl}>{imageHostName}</a> */}
    {children}
  </StyledFigcaption>
)

export default ImageCaption
