import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

class Merry extends React.Component {
  componentDidMount = () => {
    var script = document.createElement('script')
    script.src = 'https://js.gleam.io/e.js'
    document.body.appendChild(script)
  }

  render = () => {
    return (
      <Layout>
        <Helmet>
          <title>A Very Merry Byteconf</title>
          <meta property="og:title" content="A Very Merry Byteconf " />
          <meta
            name="description"
            content="We're giving away over $2000 in web dev courses, subscriptions and more, to help you jump start your web dev career!
"
          />
          <meta
            property="og:description"
            content="We're giving away over $2000 in web dev courses, subscriptions and more, to help you jump start your web dev career!"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://byteconf-production.s3.amazonaws.com/headers/a_very_merry_byteconf.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@byteconf" />
        </Helmet>
        <div className="container max-w-lg mx-auto sm:px-4 justify-center pt-12">
          <div class="pb-8">
            <h3 className="pt-4 sm:pt-0 text-center">
              We're giving away over $2000 in web dev subscriptions, courses,
              and more!
            </h3>
            <p className="pt-4 text-center">
              Our community has grown a TON in the first year of Byteconf, and
              to celebrate, we've partnered up with a ton of great folks in the
              frontend web development community to give away all kinds of
              exciting products and subscriptions to help you jumpstart your web
              dev career – over $2000 in prizes!
            </p>
            <p className="pt-4 text-center">
              <a
                className="text-black"
                href="https://www.byteconf.com/blog/very-merry-byteconf"
              >
                Read the announcement post on the Byteconf blog
              </a>
            </p>
          </div>
          <a
            class="e-widget"
            href="https://gleam.io/nWZ4c/a-very-merry-byteconf"
            rel="nofollow"
          >
            A Very Merry Byteconf
          </a>
        </div>
      </Layout>
    )
  }
}

export default Merry
