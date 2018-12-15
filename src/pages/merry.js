import * as React from 'react'
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
