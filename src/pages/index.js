import React from 'react'

import Events from '../components/Events'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Posts from '../components/Posts'

const Index = () => (
  <Layout>
    <Nav />
    <div className="container md:w-full mx-auto flex flex-row-reverse flex-wrap px-4 md:px-0">
      <Posts />
      <Events />
    </div>
  </Layout>
)

export default Index
