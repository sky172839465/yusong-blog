import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer.attrs({
  className: 'has-text-centered'
})`
  height: 2rem;
`

const footer = () => {
  return (
    <Footer>
      © {new Date().getFullYear()}
      {` YuSong Hsu`}
    </Footer>
  )
}

export default footer
