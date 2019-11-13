import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import favicon from '../assets/byteconf-full.png'
import './Layout.css'

import CTA from './CTA'
import Footer from './Footer'
import Nav from './Nav'
import Share from './Share'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={layoutQuery}
      render={data => {
        const siteTitle = data.site.siteMetadata.title
        const siteDescription = data.site.siteMetadata.description
        return (
          <div>
            <Helmet
              htmlAttributes={{ lang: 'en' }}
              meta={[{ name: 'description', content: siteDescription }]}
              title={siteTitle}
            >
              <link rel="shortcut icon" type="image/png" href={`${favicon}`} />
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                crossorigin="anonymous"
              />
              <link
                href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap"
                rel="stylesheet"
              />
              <link rel="manifest" href="/manifest.json" />
              <meta
                name="description"
                content="Free developer conferences for everyone"
              />
              <meta property="og:title" content="Byteconf" />
              <meta
                property="og:description"
                content="Free developer conferences for everyone"
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:image"
                content="https://byteconf-production.s3.amazonaws.com/headers/smoky.jpg"
              />
              <meta property="og:url" content="https://www.byteconf.com/" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@byteconf" />
              <script
                async
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/prism.min.js"
              />
              <script
                async
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/plugins/line-numbers/prism-line-numbers.min.js"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/themes/prism.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/plugins/line-numbers/prism-line-numbers.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/themes/prism-coy.min.css"
              />

              <script
                async
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/components/prism-css.min.js"
              />
              <script
                async
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/components/prism-html.min.js"
              />
              <script
                async
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/components/prism-javascript.min.js"
              />
              <script
                async
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/components/prism-jsx.min.js"
              />
              <script
                async
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/components/prism-sql.min.js"
              />
            </Helmet>
            <div className="mb-32">
              <Nav />
            </div>
            {children}
            <CTA />
            <Footer />
            <Share />
          </div>
        )
      }}
    />
  )
}

const layoutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Layout
