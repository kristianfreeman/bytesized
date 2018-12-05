import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { get, orderBy } from 'lodash'

import Event from '../components/Event'
import Nav from '../components/Nav'
import Layout from '../components/Layout'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const events = get(data, 'sanity.allEvents', [])

    return (
      <Layout>
        <Nav />
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        >
          <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </Helmet>
        <div className="container mx-auto sm:px-4 justify-center">
          <div className="flex flex-col flex-wrap justify-between mt-8">
            {orderBy(events, 'start_date', 'desc').map(event => (
              <Event event={event} />
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    sanity {
      allEvents {
        _id
        description
        name
        slug
        start_date
        youtube_playlist
      }
    }
  }
`
