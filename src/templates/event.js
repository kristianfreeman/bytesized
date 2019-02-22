import * as React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import EventHeader from '../components/Event/Header'
import EventHero from '../components/Event/Hero'
import EventSpeakers from '../components/Event/Speakers'
import Footer from '../components/Event/Footer'
import Schedule from '../components/Event/Schedule'
import Sponsors from '../components/Event/Sponsors'

import S3Url from '../utils/s3Url'
import './event.css'

import { graphql } from 'gatsby'

const CFPLink = ({ event: { cfp_link, name, slug } }) => (
  <div className="bg-white text-black text-center py-16">
    <h3 className="text-3xl text-bold uppercase px-4">
      <a
        className="no-underline text-black hover:text-grey-darker"
        href={cfp_link}
      >
        <span className="mr-4">
          <i className="fas fa-lightbulb" />
        </span>
        Have an idea for a talk at {name}?
      </a>
    </h3>
  </div>
)

const SponsorLink = ({ event }) => (
  <div className="bg-yellow-dark text-white text-center py-16" id="speakers">
    <h3 className="text-3xl text-bold uppercase px-4">
      <a
        className="text-white no-underline hover:text-green-darker"
        href={event.sponsor_interest_link}
      >
        <span className="mr-4">
          <i className="fas fa-handshake" />
        </span>
        Want to sponsor {event.name}?
      </a>
    </h3>
  </div>
)

const SponsorsIfReact = ({ event: { slug } }) =>
  slug === 'react-2018' && <Sponsors />

const SpeakersIfConf = ({ event }) =>
  event.event_type === 'conference' && <EventSpeakers event={event} />

const Event = ({ data }) => {
  const event = data.sanity.allEvents.length && data.sanity.allEvents[0]
  const cover = S3Url(event.cover_path || 'headers/attendees.jpg')

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
      <div
        className="bg-cover bg-black min-h-screen"
        style={{
          background: `url(${cover})`,
        }}
      >
        <EventHero event={event} />
      </div>
      {event.status === 'announced' ? (
        <div>
          <CFPLink event={event} />
          <SponsorLink event={event} />
        </div>
      ) : (
        <div>
          <SpeakersIfConf event={event} />
          <Schedule event={event} />
          <SponsorsIfReact event={event} />
        </div>
      )}
      <Footer event={event} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query EventQuery($slug: String!) {
    sanity {
      allEvents(where: { published: true, slug: $slug }) {
        _id
        slug
        icon
        start_date
        end_date
        name
        status
        location
        simple_copy
        event_type
        youtube_playlist
        sponsor_interest_link
        cfp_link
        cover_path
        event_speakers {
          available_live
          speaker {
            _id
            name
            company
            static_image_path
            github
            twitter
            website
          }
        }
        talks {
          _id
          name
          description
          level
          time
          slides
          position
          event_speaker {
            available_live
            speaker {
              _id
              name
              company
              static_image_path
              github
              twitter
              website
            }
          }
        }
      }
    }
  }
`

export default Event
