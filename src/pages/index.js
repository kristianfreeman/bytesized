import React from 'react'
import { Link, graphql } from 'gatsby'
import { get, orderBy } from 'lodash'

import Event from '../components/Event'
import Nav from '../components/Nav'
import Layout from '../components/Layout'

import s3Url from '../utils/s3Url'

import moment from 'moment'

const TODAY = new Date()

const isToday = date => moment(date).isSame(TODAY, 'day')
const afterToday = date => new Date(date) > TODAY

const Patreon = () => (
  <div class="py-2 md:py-4">
    <div class="pb-2">
      <p class="block leading-normal text-lg py-8">
        {
          "Support our mission of bringing developer conferences to everyone, for as little as $2/mo. You'll get a shoutout in future streams, and access to exclusive content, Discord channels, and more."
        }
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
  <div class="py-4">
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

    const today = events.filter(
      ({ start_date, end_date }) => isToday(start_date) || isToday(end_date)
    )
    const upNext = events.filter(({ start_date }) => afterToday(start_date))
    const previous = events.filter(
      ({ end_date }) => !isToday(end_date) && !afterToday(end_date)
    )

    return (
      <Layout>
        <Nav />
        <div className="container mx-auto pt-8 md:pt-0 justify-center">
          {today.length > 0 && (
            <div className="mb-12">
              {today.map(event => (
                <div>
                  <Event event={event} key={event._id} live />
                </div>
              ))}
            </div>
          )}
          {upNext.length ? (
            <div className="py-4">
              <h3 className="uppercase tracking-wide">Coming Up</h3>
              <div className="mt-8">
                {orderBy(upNext, 'start_date', 'asc').map(event => (
                  <Event event={event} key={event._id} />
                ))}
              </div>
              }
            </div>
          ) : null}
          <div className="py-4">
            <div className="mt-8">
              {orderBy(previous, 'start_date', 'desc').map(event => (
                <Event event={event} key={event._id} />
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
      allEvents(where: { published: true }) {
        _id
        description
        icon
        name
        slug
        start_date
        end_date
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
  }
`
