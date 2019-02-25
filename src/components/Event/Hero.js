import * as React from 'react'

import * as moment from 'moment'

import { DateTime } from 'luxon'
import RelativeTime from '../RelativeTime'

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

class EventHero extends React.Component {
  render() {
    const { event } = this.props

    return (
      <div className="flex flex-grow flex-col container mx-auto sm:px-4 text-white justify-center min-h-screen">
        <div className="px-10 pb-20">
          <h1 className="text-4xl mt-16 mb-4 uppercase">
            {event.icon && (
              <span className="mr-4">
                <i className={`fas ${event.icon}`} />
              </span>
            )}
            {event.name}
          </h1>

          <div className="text-3xl font-normal mb-2">
            <DateString
              start_date={event.start_date}
              end_date={event.end_date}
            />
          </div>

          <div className="text-base text-grey font-normal uppercase mb-8">
            {event.location}
          </div>

          <div className="mt-4">
            <p className="block leading-normal text-xl">{event.simple_copy}</p>
          </div>

          <div className="mt-4">
            {event.youtube_playlist && (
              <div className="mt-8">
                <a
                  className="py-2 px-3 rounded-lg bg-black no-underline hover:underline text-white"
                  href={event.youtube_playlist}
                >
                  <i className="fab fa-youtube mr-2" />
                  Watch {event.name} on YouTube
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EventHero
