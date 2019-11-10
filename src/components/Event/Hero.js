import * as React from 'react'
import * as moment from 'moment'

import illustration from './illustration.svg'
import './illustration.css'
import { DateTime } from 'luxon'
import RelativeTime from '../RelativeTime'

const RSVP = ({ event: { name, rsvp_url } }) => (
  <div className="bg-white p-8 w-full md:flex-1 md:w-1/3 shadow shadow-2 mt-8 md:mt-0 md:ml-16 md:m-8 text-center">
    <h2 className="text-2xl font-bold">Get your free ticket</h2>
    <p className="mt-4 mb-8 text-lg">
      We'll also sign you up for Bytesized Weekly, our newsletter covering
      what's new and hot in the web development world. No spam, and you can
      unsubscribe at any time.
    </p>
    <a
      className="bg-orange-200 text-orange-800 font-bold p-2 text-lg"
      href={rsvp_url}
    >
      Register for {name}
    </a>
  </div>
)

const DateString = ({ start_date, end_date }) => {
  const start = DateTime.fromISO(start_date)
  const end = DateTime.fromISO(end_date)

  if (start.hasSame(end, 'day')) {
    return <RelativeTime date={start_date} />
  } else {
    return (
      <React.Fragment>
        <RelativeTime date={start_date} /> – <RelativeTime date={end_date} />
      </React.Fragment>
    )
  }
}

class EventHero extends React.Component {
  render() {
    const { event } = this.props

    return (
      <div className="md:flex items-center container mx-auto">
        <div className="w-full md:flex-2 px-4 md:px-0 md:w-1/2">
          <div className="text-xl">
            <DateString
              start_date={event.start_date}
              end_date={event.end_date}
            />{' '}
            · {event.location}
          </div>

          <div className="mt-4">
            <p className="block leading-normal text-xl">{event.simple_copy}</p>
          </div>

          {event.youtube_playlist && (
            <div className="mt-12">
              <div className="py-4">
                <a
                  className="py-2 px-3 rounded-lg bg-red-800 no-underline hover:underline text-white"
                  href={event.youtube_playlist}
                >
                  <i className="fab fa-youtube mr-2" />
                  Watch {event.name} on YouTube
                </a>
              </div>
            </div>
          )}
        </div>
        {event.status != 'finished' && <RSVP event={event} />}
      </div>
    )
  }
}

export default EventHero
