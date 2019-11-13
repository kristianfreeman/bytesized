import * as React from 'react'
import * as moment from 'moment'

import illustration from './illustration.svg'
import './illustration.css'
import { DateTime } from 'luxon'
import RelativeTime from '../RelativeTime'

const RSVP = ({ event: { name, rsvp_url } }) => (
  <div className="bg-white p-12 w-full md:flex-1 md:w-1/3 shadow shadow-lg mt-8 md:mt-0 md:ml-16 md:m-8 text-center">
    <h2 className="text-2xl font-bold">Get your free ticket</h2>
    <p className="mt-4 mb-8 text-lg">
      We'll also sign you up for Bytesized Weekly, our newsletter covering
      what's new and hot in the web development world. No spam, and you can
      unsubscribe at any time.
    </p>
    <a
      className="bg-orange-200 text-orange-800 hover:bg-orange-800 hover:text-white transition-all font-bold p-4 text-lg"
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
      <>
        <div className="container mx-auto my-8">
          <h1 className="text-4xl px-4 md:px-0 font-bold">{event.name}</h1>
        </div>
        <div className="md:flex items-center container mx-auto pt-8 pb-16">
          <div className="w-full md:flex-2 px-4 md:px-0 md:w-1/2">
            <div className="font-bold text-2xl mb-8">
              <DateString
                start_date={event.start_date}
                end_date={event.end_date}
              />
            </div>

            <div className="mt-4">
              <p className="block leading-normal text-2xl">
                {event.simple_copy}
              </p>
            </div>

            {event.youtube_playlist && (
              <div className="mt-12">
                <div className="py-4">
                  <a
                    className="py-2 px-4 rounded-lg bg-red-800 hover:bg-red-900 transition-all text-white text-lg md:text-xl lg:text-xl shadow hover:shadow-xl"
                    href={event.youtube_playlist}
                  >
                    <i className="fab fa-youtube mr-2" />
                    Watch <span className="hidden lg:inline">
                      {event.name}
                    </span>{' '}
                    on YouTube
                  </a>
                </div>
              </div>
            )}
          </div>
          {event.status != 'finished' ? (
            <RSVP event={event} />
          ) : (
            <img
              className="illustration transition-all hover:lighten-sm w-1/2 hidden lg:block"
              src={illustration}
            />
          )}
        </div>
      </>
    )
  }
}

export default EventHero
