/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// import Header from './header'
import Navbar from './navbar'
import Footer from './footer'
import '../styles/bulma/index.scss'
import './layout.css'

const Main = styled.main`
  margin-top: 5rem;
  min-height: calc(100vh - 7rem);
`

const Layout = props => {
  const { path, children } = props
  return (
    <>
      <Navbar path={path} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
      >
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
