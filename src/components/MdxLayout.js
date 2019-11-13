import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Layout from './Layout'

const MdxLayout = ({ children }) => {
  return (
    <Layout>
      <div className="container mx-auto">{children}</div>
    </Layout>
  )
}

export default MdxLayout
