import * as React from 'react'
import { Helmet } from 'react-helmet'

import { get } from 'lodash'

import Layout from '../components/Layout'
import S3Url from '../utils/s3Url'

const EventRSVP = ({ data }) => {
  const event = data.sanityEvent
  const cover = S3Url(
    event.og_meta_image_path || event.cover_path || 'headers/attendees.jpg'
  )

  const pastEvents = get(data, 'allSanityEvent.edges', [])
    .map(e => e.node)
    .filter(e => e._id !== event._id)

  return (
    <Layout title={event.name}>
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
              <a
                className="text-red-800 font-bold"
                href="https://twitter.com/bytesizedcode"
              >
                Follow us on Twitter
              </a>
            </li>
            {event.twitter_announcement && (
              <li className="my-4">
                If you have Twitter, help spread the word by{' '}
                <a
                  className="text-red-800 font-bold"
                  href={event.twitter_announcement}
                >
                  retweeting our announcement for {event.name}
                </a>
              </li>
            )}
            <li className="my-4">
              <a
                className="text-red-800 font-bold"
                href="https://www.youtube.com/channel/UC046lFvJZhiwSRWsoH8SFjg?sub_confirmation=1"
              >
                Subscribe to us on YouTube
              </a>
            </li>
          </ul>

          <hr className="my-8" />

          <p className="text-xl my-4">
            Interested in some of our past Byteconf conferences? You can watch
            every talk from each of our past conferences on YouTube - rad! Check
            out the playlists below:
          </p>

          <ul className="text-xl my-4 list-disc">
            {pastEvents.map(pastEvent => (
              <li className="my-4" key={pastEvent._id}>
                <a
                  className="text-red-800 font-bold"
                  href={pastEvent.youtube_playlist}
                >
                  {pastEvent.name}
                </a>
              </li>
            ))}
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
    allSanityEvent(filter: { event_type: { eq: "conference" } }) {
      edges {
        node {
          _id
          name
          youtube_playlist
        }
      }
    }
    sanityEvent(slug: { eq: $slug }) {
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
`

export default EventRSVP
