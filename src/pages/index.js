import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { get } from 'lodash'

import Nav from '../components/Nav'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

import styled from '@emotion/styled'

const Container = styled('div')`
  ${tw`bg-overlay min-h-screen`};
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const events = get(data, 'sanity.allEvents', [])

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Nav />
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Container>
          {events.map(event => {
            return (
              <div key={event._id}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <a href={`https://byteconf.com/${event.slug}`}>
                    {event.name}
                  </a>
                </h3>
                <p>{event.description}</p>
                <p>{event.start_date}</p>
              </div>
            )
          })}
        </Container>
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
      }
    }
  }
`
