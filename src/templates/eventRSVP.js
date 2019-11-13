import * as React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import Nav from '../components/Nav'

import S3Url from '../utils/s3Url'

const EventRSVP = ({ data }) => {
  const event = data.sanity.allEvents.length && data.sanity.allEvents[0]
  const cover = S3Url(
    event.og_meta_image_path || event.cover_path || 'headers/attendees.jpg'
  )

  return (
    <Layout>
      <Helmet>
        <title>{event.name} | Byteconf</title>
        <meta name="description" content={event.simple_copy} />
        <meta property="og:title" content={event.name} />
        <meta property="og:description" content={event.simple_copy} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={cover} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@byteconf" />
      </Helmet>
      <Nav customTitle={event.name} showSubtitle={false} />
      <div className="container md:flex mx-auto px-4 md:px-0 min-h-screen md:min-h-0 leading-loose">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl mb-8">Thanks for RSVPing!</h1>
          <p className="text-xl my-4">
            We're super excited for {event.name}. Byteconf is a community-driven
            conference for <em>everyone</em>, and we're stoked to have you
            attending.
          </p>
          <p className="text-xl my-4">
            Want to help us spread the word and put on a great event? Here's how
            you can help:
          </p>
          <ul className="text-xl my-4 list-disc">
            <li className="my-4">
              If you have Twitter,{' '}
              <a
                className="text-red-800 font-bold"
                href={event.twitter_announcement}
              >
                retweet our announcement tweet for {event.name}
              </a>{' '}
              (and{' '}
              <a
                className="text-red-800 font-bold"
                href="https://twitter.com/bytesizedcode"
              >
                follow us
              </a>{' '}
              on there too, if you aren't already!)
            </li>
            <li className="my-4">
              <a
                className="text-red-800 font-bold"
                href="https://www.youtube.com/channel/UC046lFvJZhiwSRWsoH8SFjg?sub_confirmation=1"
              >
                Subscribe to us on YouTube
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src="https://media.giphy.com/media/TabwFck9vEt44/giphy.gif" />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query EventRSVPQuery($slug: String!) {
    sanity {
      allEvents(where: { slug: $slug }) {
        _id
        slug
        start_date
        end_date
        name
        cover_path
        og_meta_image_path
        twitter_announcement
      }
    }
  }
`

export default EventRSVP
