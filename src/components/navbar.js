import React, { useState } from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import clx from 'classnames'
import styled from 'styled-components'
import Image from './image'
import Icon from './icon'
import {
  FaFacebookF,
  FaMediumM,
  FaGithubAlt
} from 'react-icons/fa'

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
const linkList = [
  { name: 'Facebook', component: FaFacebookF, href: 'https://www.facebook.com/sky172839465' },
  { name: 'Medium', component: FaMediumM, href: 'https://medium.com/yusong-blog' },
  { name: 'GitHub', component: FaGithubAlt, href: 'http://github.com/sky172839465' }
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
            <Image
              className='image'
              imgName='yusong.io.logo.png'
              alt='Yusong IO LOGO'
            />
          </Link>
        </BrandArea>
        <span
          role='button'
          className='navbar-burger'
          aria-label='menu'
          onClick={() => setVisible(!visible)}
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </span>
      </div>
      <NavMenuArea visible={visible}>
        <div className='navbar-start'>
          {pageList.map(({ name, path }) => {
            return (
              <Link
                key={path}
                to={path}
                className={clx(
                  'navbar-item',
                  { 'is-active': _.startsWith(currentPath, path) }
                )}
                onClick={() => setVisible(!visible)}
              >
                {name}
              </Link>
            )
          })}
        </div>
        <div className='navbar-end'>
          {linkList.map(({ component, href }) => {
            return (
              <a key={href} href={href} target='blank' className='navbar-item'>
                <Icon component={component} alone />
              </a>
            )
          })}
        </div>
      </NavMenuArea>
    </nav>
  )
}

export default Navbar
