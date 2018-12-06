import * as React from 'react'

import RelativeTime from '../RelativeTime'

import S3Url from '../../utils/s3Url'

const Footer = ({ event }) => (
  <div className="bg-purple-darkest text-white p-8">
    <div className="flex flex-wrap m-5">
      <div className="sm:w-full md:w-1/3">
        <h4 className="text-lg mb-4 mr-4">
          {event.name} - <RelativeTime date={event.start_date} />
        </h4>
        <p>{event.location}</p>
      </div>

      <div className="sm:w-full md:w-1/3 mb-4 md:mb-0">
        <h4 className="text-md sm:pt-4 md:pt-0 mb-4 lg:mr-8">
          Are you interested in supporting Byteconf's mission of free developer
          conferences for everyone?
        </h4>
        <p className="py-4">
          <a
            className="uppercase font-bold text-white border-black bg-green hover:bg-red no-underline p-4 rounded-lg"
            href="/patrons"
          >
            <i className="fab fa-patreon fa-2x no-underline border-white align-middle mr-2" />
            Support us on Patreon
          </a>
        </p>
      </div>

      <div className="sm:w-full md:w-1/3">
        <h4 className="text-lg mb-4">Contact Us</h4>
        <p className="mb-8">
          Email:{' '}
          <a href="mailto:conf@bytesized.xyz" className="text-grey">
            conf@bytesized.xyz
          </a>
        </p>
        <h4 className="text-lg pb-8">Follow Us</h4>
        <p className="mb-4">
          <a
            href="/s/twitter"
            className="no-underline p-4"
            title="Byteconf on Twitter"
          >
            <i className="fa-2x fab fa-twitter text-white no-underline border-white" />
          </a>
          <a
            href="/s/discord"
            className="no-underline p-4"
            title="Byteconf on Discord"
          >
            <i className="fa-2x fab fa-discord text-white no-underline border-white" />
          </a>
          <a
            href="/s/twitch"
            className="no-underline p-4"
            title="Byteconf on Twitch"
          >
            <i className="fa-2x fab fa-twitch text-white no-underline border-white" />
          </a>
          <a
            href="https://github.com/byteconf"
            className="no-underline p-4"
            title="Byteconf on GitHub"
          >
            <i className="fa-2x fab fa-github text-white no-underline border-white" />
          </a>
        </p>
        <p className="mb-4">
          <a
            href="/s/medium"
            className="no-underline p-4"
            title="Byteconf on Medium"
          >
            <i className="fa-2x fab fa-medium text-white no-underline border-white" />
          </a>
          <a
            href="/s/youtube"
            className="no-underline p-4"
            title="Byteconf on YouTube"
          >
            <i className="fa-2x fab fa-youtube text-white no-underline border-white" />
          </a>
          <a
            href="/s/instagram"
            className="no-underline p-4"
            title="Byteconf on Instagram"
          >
            <i className="fa-2x fab fa-instagram text-white no-underline border-white" />
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
