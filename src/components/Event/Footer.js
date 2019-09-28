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
        <RelativeTime date={start_date} /> – <RelativeTime date={end_date} />
      </div>
    )
  }
}

const Footer = ({ event }) => (
  <React.Fragment>
    <svg
      className="-mt-24 -mb-8 pb-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#FEEBC8"
        fill-opacity="1"
        d="M0,160L80,181.3C160,203,320,245,480,234.7C640,224,800,160,960,160C1120,160,1280,224,1360,256L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
    <div className="p-8 bg-orange-200">
      <div className="flex flex-wrap m-5 justify-center">
        <div className="w-full md:w-1/3 pb-4">
          <h4 className="text-2xl mb-4 pr-8">{event.name}</h4>
          <p>
            <DateString
              start_date={event.start_date}
              end_date={event.end_date}
            />
          </p>
          <p className="mb-8 py-4">{event.location}</p>
        </div>

        <div className="w-full md:w-1/3 pb-4">
          <h4 className="text-xl mb-4">Contact Us</h4>
          <p className="mb-4">
            <a href="mailto:conf@bytesized.xyz" className="text-red-800">
              conf@bytesized.xyz
            </a>
          </p>
          <p className="mb-8 pb-4 mr-8">
            Byteconf attendees and speakers are expected to follow our{' '}
            <a className="text-red-800" href="http://confcodeofconduct.com/">
              Conference Code of Conduct
            </a>
            .
          </p>
        </div>

        <div className="w-full md:w-1/3 pb-4">
          <h4 className="text-xl text-black pb-8">Follow Us</h4>
          <p className="mb-4">
            <a
              href="/s/newsletter"
              className="no-underline p-4"
              title="Join our newsletter"
            >
              <i className="fa-2x fas fa-envelope text-red-800 no-underline border-white" />
            </a>
            <a
              href="/s/twitter"
              className="no-underline p-4"
              title="Byteconf on Twitter"
            >
              <i className="fa-2x fab fa-twitter text-red-800 no-underline border-white" />
            </a>
            <a
              href="/s/twitch"
              className="no-underline p-4"
              title="Byteconf on Twitch"
            >
              <i className="fa-2x fab fa-twitch text-red-800 no-underline border-white" />
            </a>
            <a
              href="https://github.com/byteconf"
              className="no-underline p-4"
              title="Byteconf on GitHub"
            >
              <i className="fa-2x fab fa-github text-red-800 no-underline border-white" />
            </a>
            <a
              href="/s/youtube"
              className="no-underline p-4"
              title="Byteconf on YouTube"
            >
              <i className="fa-2x fab fa-youtube text-red-800 no-underline border-white" />
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-grow flex-col mx-auto text-black text-center">
        <p className="block leading-normal text-sm sm:mx-6 md:mx-24 py-8">
          © Copyright Bytesized, LLC 2018-2019. All Rights Reserved.
        </p>
      </div>
    </div>
  </React.Fragment>
)

export default Footer
