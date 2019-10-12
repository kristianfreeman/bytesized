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
          status
        }
      }
    }
  `)

  const events = get(data, 'sanity.allEvents', [])
  const announced = events.filter(({ status }) => status !== 'planning')

  return (
    <div className="w-full md:flex-1">
      <h4 className="text-2xl font-bold">Byteconf</h4>
      <p>Free developer conferences, streamed online</p>
      <div className="py-4">
        <div className="mt-4">
          {orderBy(announced, 'start_date', 'desc').map(event => (
            <Event event={event} key={event._id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
