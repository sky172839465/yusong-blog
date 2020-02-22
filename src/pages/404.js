import React from 'react'
import SEO from '../components/seo'
import Title from '../components/title'

const NotFoundPage = () => (
  <main>
    <SEO title='404: Not found' />
    <Title>NOT FOUND <span>👻</span></Title>
    <p>You just hit a route that doesn&#39;t exist... <span>😢</span></p>
  </main>
)

export default NotFoundPage
