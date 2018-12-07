import React from 'react'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component {
  constructor(args) {
    super(args)
    this.state = { loaded: false }
  }

  componentDidMount = () => {
    if (window && window.setTimeout) {
      setTimeout(() => {
        this.setState({ loaded: true })
      }, 2000)
    }
  }

  render() {
    const content = (
      <React.Fragment>
        <h1 className="mb-8">Sorry, we couldn't find this page!</h1>
        <p>
          <a
            className="p-2 bg-green text-white no-underline hover:underline"
            href="/"
          >
            Go home
          </a>
        </p>
      </React.Fragment>
    )
    return (
      <Layout location={this.props.location}>
        <div className="container mx-auto py-4">
          {this.state.loaded ? content : null}
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
