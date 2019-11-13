import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'

import System from '../system'

import Layout from './Layout'

const MdxLayout = ({ children, pageContext: { frontmatter } }) => {
  const { title } = frontmatter

  return (
    <Layout title={title}>
      <MDXProvider components={System}>
        <div className="container mx-4 md:mx-auto">{children}</div>
      </MDXProvider>
    </Layout>
  )
}

export default MdxLayout
