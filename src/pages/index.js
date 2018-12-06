import React from 'react'
import { Link, graphql } from 'gatsby'
import { get, orderBy } from 'lodash'

import Event from '../components/Event'
import Layout from '../components/Layout'

const TODAY = new Date()

const Header = () => (
  <div className="py-4">
    <h2 className="text-3xl font-normal py-4">
      Free developer conferences for everyone, streamed on Twitch.
    </h2>

    <p>
      <a
        className="no-underline text-black"
        href="/s/blog"
        title="Byteconf Blog"
      >
        <i className="fas fa-newspaper fa-2x border-white pr-4" />
      </a>
      <a
        className="no-underline text-black"
        href="/s/newsletter"
        title="Byteconf Newsletter"
      >
        <i className="fas fa-envelope fa-2x border-white p-4" />
      </a>
      <a
        className="no-underline text-black"
        href="/s/twitter"
        title="@byteconf on Twitter"
      >
        <i className="fab fa-twitter fa-2x no-underline border-white p-4" />
      </a>
      <a
        className="no-underline text-black"
        href="/s/discord"
        title="Byteconf Discord channel"
      >
        <i className="fab fa-discord fa-2x border-white p-4" />
      </a>
      <a
        className="no-underline text-black"
        href="/s/twitch"
        title="@byteconf on Twitch"
      >
        <i className="fab fa-twitch fa-2x border-white p-4" />
      </a>
      <a
        className="no-underline text-black"
        href="/s/youtube"
        title="@byteconf on YouTube"
      >
        <i className="fab fa-youtube fa-2x border-white p-4" />
      </a>
    </p>
  </div>
)

const afterToday = date => new Date(date) > TODAY

class Index extends React.Component {
  render() {
    const { data } = this.props
    const events = get(data, 'sanity.allEvents', [])

    const upNext = events.filter(({ start_date }) => afterToday(start_date))
    const previous = events.filter(({ start_date }) => !afterToday(start_date))

    return (
      <Layout>
        <div className="container mx-auto sm:px-4 justify-center">
          <Header />
          <div class="py-4">
            <h3 class="uppercase tracking-wide">Coming Up</h3>
            <div className="flex flex-wrap justify-between mt-8">
              {orderBy(upNext, 'start_date', 'desc').map(event => (
                <Event event={event} />
              ))}
            </div>
          </div>
          <div class="py-4">
            <h4 class="uppercase tracking-wide">Previously</h4>
            <div className="flex flex-wrap justify-between mt-8">
              {orderBy(previous, 'start_date', 'desc').map(event => (
                <Event event={event} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    sanity {
      allEvents {
        _id
        description
        name
        slug
        start_date
        youtube_playlist
        cover_path
        event_type
      }
    }
  }
`
