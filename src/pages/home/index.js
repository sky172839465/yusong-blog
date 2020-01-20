import React from 'react'
import SEO from '../../components/seo'
import IntroPost from './introPost'
import LastestPosts from './lastestPosts'

const HomePage = props => {
  return (
    <>
      <SEO
        title='Note'
        description='Write down something I should remember...'
        path={props.path}
      />
      <IntroPost />
      <LastestPosts />
    </>
  )
}

export default HomePage
