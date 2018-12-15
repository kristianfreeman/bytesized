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
        <div style={{ marginTop: '60px' }}>
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
