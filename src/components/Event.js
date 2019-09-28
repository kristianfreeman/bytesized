import React from 'react'

import { DateTime } from 'luxon'
import ReactPlayer from 'react-player'
import RelativeTime from './RelativeTime'

const DateString = ({ start_date, end_date }) => {
  const start = DateTime.fromISO(start_date)
  const end = DateTime.fromISO(end_date)

  if (start.hasSame(end, 'day')) {
    return <RelativeTime date={start_date} />
  } else {
    return (
      <div>
        <RelativeTime date={start_date} /> – <RelativeTime date={end_date} />
      </div>
    )
  }
}

const s3Url = path => `https://byteconf-production.s3.amazonaws.com/${path}`

const Container = ({ children, url }) => (
  <div className={`w-full mb-12 md:flex-2 overflow-hidden`}>{children}</div>
)

const Event = ({ event, live = false }) => {
  const parsedDate = DateTime.fromISO(event.start_date)
  return (
    <Container url={s3Url(event.cover_path)}>
      <div className={`flex flex-col h-full`}>
        <div className="font text-4xl mb-2">
          <i className={`mr-2 fa ${event.icon}`} />
          <a href={event.slug}>{event.name}</a>
        </div>
        {Date.parse(event.start_date) > Date.now() && (
          <p className="text-lg pt-4 pb-6 flex-grow">{event.description}</p>
        )}
        <p className="text-lg">
          <DateString start_date={event.start_date} end_date={event.end_date} />
        </p>
        {live && (
          <div className="pt-8">
            <ReactPlayer playing url="https://twitch.tv/byteconf" />
          </div>
        )}
        {event.youtube_playlist && (
          <p className="text-lg mt-8 mb-2">
            <a href={event.youtube_playlist} className="no-underline">
              <i className="fab fa-youtube mr-1" />{' '}
              <span className="no-underline hover:underline">
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
