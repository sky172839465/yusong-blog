import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer.attrs({
  className: 'has-text-centered'
})`
  margin: 1rem auto;
`

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}
      {` YuSong Hsu`}
    </StyledFooter>
  )
}

export default Footer
