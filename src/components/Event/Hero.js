import * as React from 'react'

import * as moment from 'moment'

import { DateTime } from 'luxon'
import RelativeTime from '../RelativeTime'

import ReactPlayer from 'react-player'

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

const Twitch = () => (
  <div>
    <div className="mt-8">
      <div className="pb-12">
        <ReactPlayer url="https://twitch.tv/byteconf" playing />
      </div>
      <a
        className="no-underline text-2xl p-4 mr-4 bg-blue text-white hover:bg-blue-light"
        href="/s/twitch"
      >
        Watch live on Twitch
      </a>
      <a
        className="no-underline text-2xl p-4 mr-4 bg-blue text-white hover:bg-blue-light"
        href="/s/youtube"
      >
        Watch live on YouTube
      </a>
    </div>
  </div>
)

class EventHero extends React.Component {
  render() {
    const { event } = this.props

    return (
      <React.Fragment>
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
              <p className="block leading-normal text-xl">
                {event.simple_copy}
              </p>
            </div>

            <div className="mt-4">
              <Twitch />
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
        <div className="flex flex-grow flex-col mx-auto sm:px-4 text-white justify-center bg-green-darkest">
          <div className="text-center py-10">
            <h2 className="text-3xl">Join our newsletter</h2>
            <p className="text-lg py-6">
              We send out just a few emails a month about new events like{' '}
              {event.name}, get feedback from the community, and more!
            </p>
            <div className="my-6">
              <a
                className="p-4 text-white no-underline bg-green hover:bg-green-dark rounded-lg text-lg"
                href="/s/newsletter"
              >
                Sign up now
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default EventHero
