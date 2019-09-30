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
        <RelativeTime date={start_date} /> – <RelativeTime date={end_date} />
      </div>
    )
  }
}

const s3Url = path => `https://byteconf-production.s3.amazonaws.com/${path}`

const Container = ({ children, url }) => (
  <div className={`w-full mb-4 md:flex-2 overflow-hidden`}>{children}</div>
)

const Event = ({ event }) => {
  const parsedDate = DateTime.fromISO(event.start_date)
  return (
    <Container url={s3Url(event.cover_path)}>
      <div className={`flex flex-col`}>
        <div className="text-2xl text-red-800 flex">
          <div className="flex mr-2 w-8 items-center justify-center">
            <i className={`fa ${event.icon}`} />
          </div>
          <a className="hover:underline" href={event.slug}>
            {event.name}
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Event
