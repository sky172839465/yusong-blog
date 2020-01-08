import React, { useState } from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import clx from 'classnames'
import styled from 'styled-components'

const BrandArea = styled.div`
  float: left;
  width: 7rem;
  margin: auto 1rem;
`
const NavMenuArea = styled.div.attrs(props => ({
  className: clx(
    'navbar-menu',
    { 'is-active': props.visible }
  )
}))`
  .navbar-item {
    margin: .5rem .25rem;
  }
`

const pageList = [
  { name: 'Blog', path: '/blog/' },
  { name: 'About', path: '/about/' },
  { name: 'Setting', path: '/setting/' }
]

const Navbar = props => {
  const [visible, setVisible] = useState(false)
  const { path: currentPath } = props
  return (
    <nav
      className='navbar is-light is-fixed-top'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <BrandArea>
          <Link to='/'>
            YUSONG.IO
          </Link>
        </BrandArea>
        <span
          role='button'
          className='navbar-burger'
          aria-label='menu'
          tabIndex={0}
          onClick={() => setVisible(!visible)}
          onKeyDown={() => setVisible(!visible)}
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </span>
      </div>
      <NavMenuArea visible={visible}>
        <div className='navbar-start'>
          {pageList.map(({ name, path }, index) => {
            return (
              <Link
                key={path}
                to={path}
                className={clx(
                  'navbar-item',
                  { 'is-active': _.startsWith(currentPath, path) }
                )}
                tabIndex={index}
                onClick={() => setVisible(!visible)}
              >
                {name}
              </Link>
            )
          })}
        </div>
      </NavMenuArea>
    </nav>
  )
}

export default Navbar
