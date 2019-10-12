import * as React from 'react'
import * as moment from 'moment'

import illustration from './illustration.svg'
import './illustration.css'
import { DateTime } from 'luxon'
import RelativeTime from '../RelativeTime'

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
      <div className="flex items-center container mx-auto">
        <div className="w-full px-4 md:px-0 md:w-1/2">
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

        <div class="hidden md:block w-1/2 -mt-12">
          <img className="illustration" src={illustration} />
        </div>
      </div>
    )
  }
}

export default EventHero
