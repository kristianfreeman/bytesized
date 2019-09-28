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
      <React.Fragment>
        <div className="pt-24 flex flex-grow flex-col container mx-auto">
          <div className="w-1/2">
            <div className="text-xl">
              <DateString
                start_date={event.start_date}
                end_date={event.end_date}
              />{' '}
              · {event.location}
            </div>

            <div className="mt-4">
              <p className="block leading-normal text-xl">
                {event.simple_copy}
              </p>
            </div>

            <div className="mt-12">
              {event.youtube_playlist && (
                <div className="py-4">
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
      </React.Fragment>
    )
  }
}

export default EventHero
