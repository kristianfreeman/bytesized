import React from 'react'

import Events from '../components/Events'
import HomepageHero from '../components/HomepageHero'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Posts from '../components/Posts'

const Index = () => (
  <Layout>
    <Nav />
    <HomepageHero />
    <div className="container md:w-full mx-auto px-4 md:px-0">
      <Events />
      <Posts />
    </div>
  </Layout>
)

export default Index
