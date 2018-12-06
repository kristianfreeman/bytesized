import React from 'react'
import LazyLoad from 'react-lazyload'

const s3Url = path => `https://byteconf-production.s3.amazonaws.com/${path}`

const Container = ({ children, eventType, url }) => (
  <div
    className={`w-full mb-4 md:flex-${
      eventType === 'conference' ? 2 : 1
    } mr-2 rounded overflow-hidden shadow-lg`}
    style={{
      background: `url(${url}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
      backgroundSize: 'cover',
    }}
  >
    {children}
  </div>
)

const Event = ({ event }) => {
  const parsedDate = new Date(event.start_date)
  return (
    <LazyLoad>
      <Container eventType={event.event_type} url={s3Url(event.cover_path)}>
        <div className="px-6 py-4 flex flex-col h-full">
          <div className="font-bold text-2xl mb-2 text-white">
            <i className="mr-1 fa <%= event.icon %>" />
            <a className="text-white" href={event.slug}>
              {event.name}
            </a>
          </div>
          {Date.parse(event.start_date) > Date.now() && (
            <p className="text-white text-lg pt-4 pb-6 flex-grow">
              {event.description}
            </p>
          )}
          <p className="text-white text-lg font-bold">
            {parsedDate.toLocaleDateString('en-US')}
          </p>
          {event.youtube_playlist && (
            <p className="text-white text-sm mt-8 mb-2">
              <a
                href={event.youtube_playlist}
                className="no-underline text-white"
              >
                <i className="fab fa-youtube mr-1 text-white" />{' '}
                <span className="text-white no-underline hover:underline">
                  Watch on YouTube
                </span>
              </a>
            </p>
          )}
        </div>
      </Container>
    </LazyLoad>
  )
}

export default Event
