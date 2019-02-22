import React from 'react'

import { DateTime } from 'luxon'
import RelativeTime from './RelativeTime'

const DateString = ({ start_date, end_date }) => {
  const start = DateTime.fromISO(start_date)
  const end = DateTime.fromISO(end_date)

  if (start.hasSame(end, 'day')) {
    return <RelativeTime date={start_date} />
  } else {
    return (
      <div>
        <RelativeTime date={start_date} /> to <RelativeTime date={end_date} />
      </div>
    )
  }
}

const s3Url = path => `https://byteconf-production.s3.amazonaws.com/${path}`

const Container = ({ children, eventType, url }) => (
  <div
    className={`w-full mb-4 md:flex-${
      eventType === 'conference' ? 2 : 1
    } mr-2 rounded overflow-hidden shadow-lg`}
    style={{
      background: `url(${url}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
      backgroundSize: 'cover',
    }}
  >
    {children}
  </div>
)

const Event = ({ event, live = false }) => {
  const parsedDate = DateTime.fromISO(event.start_date)
  return (
    <Container eventType={event.event_type} url={s3Url(event.cover_path)}>
      <div className={`px-6 py-${live ? 12 : 4} flex flex-col h-full`}>
        <div className="font-bold text-2xl mb-2 text-white">
          <i className={`mr-2 fa ${event.icon}`} />
          <a className="text-white" href={event.slug}>
            {event.name}
          </a>
        </div>
        {Date.parse(event.start_date) > Date.now() && (
          <p className="text-white text-lg pt-4 pb-6 flex-grow">
            {event.description}
          </p>
        )}
        <p className="text-white text-lg font-bold">
          <DateString start_date={event.start_date} end_date={event.end_date} />
        </p>
        {event.youtube_playlist && (
          <p className="text-white text-sm mt-8 mb-2">
            <a
              href={event.youtube_playlist}
              className="no-underline text-white"
            >
              <i className="fab fa-youtube mr-1 text-white" />{' '}
              <span className="text-white no-underline hover:underline">
                Watch on YouTube
              </span>
            </a>
          </p>
        )}
      </div>
    </Container>
  )
}

export default Event
