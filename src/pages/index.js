import React from 'react'

import Events from '../components/Events'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Posts from '../components/Posts'

const CTA = () => {
  return (
    <div className="container mx-auto my-8">
      <p className="text-2xl mb-8">
        RSVP to Byteconf conferences and receive free tutorials and screencasts
        directly in your inbox ⤵️
      </p>
      <a
        className="bg-orange-800 text-2xl text-white p-4 rounded-lg"
        href="https://bytesized.xyz/newsletter"
      >
        <i className={`fas mr-2 fa-envelope`} />
        <span>Join our mailing list</span>
      </a>
    </div>
  )
}

const Index = () => (
  <Layout>
    <Nav />
    <div className="container md:w-full mx-auto flex flex-row-reverse flex-wrap">
      <Posts />
      <Events />
    </div>
    <CTA />
  </Layout>
)

export default Index
