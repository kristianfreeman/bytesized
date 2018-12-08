import React from 'react'
import { Link, graphql } from 'gatsby'
import { get, orderBy } from 'lodash'

import Event from '../components/Event'
import Layout from '../components/Layout'

import s3Url from '../utils/s3Url'

const TODAY = new Date()

const NewPost = ({ post: { node } }) => (
  <div className="pb-8">
    <a href={`/blog/${node.slug}`} className="no-underline" title={node.title}>
      <div
        className="flex-wrap p-2 hover:bg-yellow bg-yellow-dark items-center text-black leading-none rounded lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span className="flex rounded-full bg-yellow-light uppercase px-2 py-1 text-xs font-bold mr-3">
          <span className="fas mr-2 fa-star" />
          New, on our blog
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          {node.title}
        </span>
        <svg
          className="hidden md:block fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </a>
  </div>
)

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

const Patreon = () => (
  <div class="p-4">
    <div class="pb-2">
      <p class="block leading-normal text-lg py-8">
        Support our mission of bringing developer conferences to everyone, for
        as little as $2/mo. You'll get a shoutout in future streams, and access
        to exclusive content, Discord channels, and more.
      </p>

      <div class="mb-4">
        <p>
          <a
            class="uppercase font-bold text-white border-black bg-green hover:bg-red no-underline p-4 rounded-lg"
            href="/patrons"
          >
            <i class="fab fa-patreon fa-2x no-underline border-white align-middle mr-2" />
            Support us on Patreon
          </a>
        </p>
      </div>
    </div>
  </div>
)

const Sponsors = ({ sponsors }) => (
  <div class="p-4">
    <h3 class="text-black uppercase tracking-wide">Sponsors</h3>
    <div class="py-8 md:flex items-center sm:w-full md:w-2/3">
      {sponsors.map(sponsor => (
        <div className="sm:w-full md:w-50 pr-4 py-4 md:py-0">
          <a href={sponsor.url}>
            <img src={s3Url(sponsor.image)} alt={sponsor.name} />
          </a>
        </div>
      ))}
    </div>
    <div className="py-8 md:flex items-center sm:w-full md:w-2/3">
      <a className="text-white no-underline uppercase" href="/sponsor">
        Become a sponsor →
      </a>
    </div>
  </div>
)

class Index extends React.Component {
  render() {
    const { data } = this.props
    const events = get(data, 'sanity.allEvents', [])
    const sponsors = get(data, 'sanity.allSponsors', [])
    const posts = get(data, 'allGhostPost.edges', [])
    const recentPost = posts.length && posts[0]

    const upNext = events.filter(({ start_date }) => afterToday(start_date))
    const previous = events.filter(({ start_date }) => !afterToday(start_date))

    return (
      <Layout>
        <div className="container mx-auto sm:px-4 justify-center">
          <Header />
          {recentPost && <NewPost post={recentPost} />}
          <div className="py-4">
            <h3 className="uppercase tracking-wide">Coming Up</h3>
            <div className="flex flex-wrap justify-between mt-8">
              {orderBy(upNext, 'start_date', 'desc').map(event => (
                <Event event={event} key={event._id} />
              ))}
            </div>
          </div>
          <div className="py-4">
            <h4 className="uppercase tracking-wide">Previously</h4>
            <div className="flex flex-wrap justify-between mt-8">
              {orderBy(previous, 'start_date', 'desc').map(event => (
                <Event event={event} key={event._id} />
              ))}
            </div>
          </div>
          <div className="py-4">
            <Patreon />
            <Sponsors sponsors={sponsors} />
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
      allEvents(where: { published: true }) {
        _id
        description
        icon
        name
        slug
        start_date
        youtube_playlist
        cover_path
        event_type
      }
      allSponsors(where: { type: "homepage" }) {
        _id
        name
        image
        url
      }
    }
    allGhostPost(limit: 1, sort: { order: DESC, fields: [published_at] }) {
      edges {
        node {
          id
          title
          featured
          feature_image
          published_at
          slug
          primary_author {
            name
          }
          html
        }
      }
    }
  }
`
