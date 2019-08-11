import * as React from 'react'

import RelativeTime from '../RelativeTime'
import S3Url from '../../utils/s3Url'
import { DateTime } from 'luxon'

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

const Footer = ({ event }) => (
  <div className="bg-purple-darkest text-white p-8">
    <div className="flex flex-wrap m-5 justify-center">
      <div className="w-full md:w-1/3 pb-4">
        <h4 className="text-lg mb-4 pr-8">
          {event.name} -{' '}
          <DateString start_date={event.start_date} end_date={event.end_date} />
        </h4>
        <p className="mb-8 pb-4">{event.location}</p>
      </div>

      <div className="w-full md:w-1/3 pb-4">
        <h4 className="text-lg mb-4">Contact Us</h4>
        <p className="mb-4">
          Email:{' '}
          <a href="mailto:conf@bytesized.xyz" className="text-grey">
            conf@bytesized.xyz
          </a>
        </p>
        <p className="mb-8 pb-4">
          Byteconf attendees and speakers are expected to follow our{' '}
          <a className="text-grey" href="http://confcodeofconduct.com/">
            Conference Code of Conduct
          </a>
          .
        </p>
      </div>

      <div className="w-full md:w-1/3 pb-4">
        <h4 className="text-lg pb-8">Follow Us</h4>
        <p className="mb-4">
          <a
            href="/s/newsletter"
            className="no-underline p-4"
            title="Join our newsletter"
          >
            <i className="fa-2x fas fa-envelope text-white no-underline border-white" />
          </a>
          <a
            href="/s/twitter"
            className="no-underline p-4"
            title="Byteconf on Twitter"
          >
            <i className="fa-2x fab fa-twitter text-white no-underline border-white" />
          </a>
          <a
            href="/s/twitch"
            className="no-underline p-4"
            title="Byteconf on Twitch"
          >
            <i className="fa-2x fab fa-twitch text-white no-underline border-white" />
          </a>
        </p>
        <p className="mb-4">
          <a
            href="https://github.com/byteconf"
            className="no-underline p-4"
            title="Byteconf on GitHub"
          >
            <i className="fa-2x fab fa-github text-white no-underline border-white" />
          </a>
          <a
            href="/s/youtube"
            className="no-underline p-4"
            title="Byteconf on YouTube"
          >
            <i className="fa-2x fab fa-youtube text-white no-underline border-white" />
          </a>
        </p>
      </div>
    </div>

    <div className="flex flex-grow flex-col mx-auto text-white text-center">
      <p className="block leading-normal text-sm sm:mx-6 md:mx-24 py-8">
        © Copyright Bytesized, LLC 2018. All Rights Reserved.
      </p>
    </div>
  </div>
)

export default Footer
