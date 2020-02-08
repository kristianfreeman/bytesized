import React from 'react'
import { get, orderBy } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'

import moment from 'moment'

import Event from './Event'

const TODAY = new Date()

const isToday = date => moment(date).isSame(TODAY, 'day')
const afterToday = date => new Date(date) > TODAY

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityEvent(filter: { published: { eq: true } }) {
        edges {
          node {
            _id
            description
            name
            slug
            start_date
            end_date
            youtube_playlist
            cover_path
            cover {
              asset {
                fluid(maxWidth: 800) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            event_type
            status
          }
        }
      }
    }
  `)

  const events = get(data, 'allSanityEvent.edges', []).map(e => e.node)
  const sorted = orderBy(events, 'start_date', 'desc')
  const filtered = sorted.filter(({ status }) => status !== 'planning')
  const [recent, ...announced] = filtered

  return (
    <div className="w-full md:flex-1 py-8">
      <h3 className="text-4xl font-bold mb-8">Events</h3>
      <p className="text-xl measure-wide">
        Byteconf is our free developer conference series, streamed online. Learn
        from the best speakers and teachers in the programming world, right from
        your home.
      </p>
      <div className="py-12 md:flex">
        <div className="flex items-stretch w-full md:flex-1">
          <Event event={recent} recent />
        </div>
        <div className="md:flex md:flex-wrap w-full md:flex-1">
          {orderBy(announced, 'start_date', 'desc').map(event => (
            <Event event={event} key={event._id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
