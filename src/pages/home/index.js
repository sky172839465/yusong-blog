import React from 'react'
import SEO from '../../components/seo'
import IntroPost from './introPost'
import LastestPosts from './lastestPosts'

const HomePage = props => {
  return (
    <>
      <SEO
        title='Home'
        path={props.path}
      />
      <IntroPost />
      <LastestPosts />
    </>
  )
}

export default HomePage
