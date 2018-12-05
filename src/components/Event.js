import React from 'react'

const Event = ({ event }) => (
  <div
    className="lazy w-full mb-2 md:mb-0 md:flex-1 mr-2 rounded overflow-hidden shadow-lg"
    data-bg="url(<%= S3Image.image_url(event.cover_path) %>)"
    style={{
      background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
      backgroundSize: 'cover',
    }}
  >
    <div className="px-6 py-4 flex flex-col h-full">
      <div className="font-bold text-2xl mb-2 text-white">
        <i className="mr-1 fa <%= event.icon %>" />
        <a className="text-white" href={event.url}>
          {event.name}
        </a>
      </div>
      <p className="text-white text-lg pt-4 pb-6 flex-grow">
        {event.description}
      </p>
      <p className="text-white text-lg font-bold">{event.simple_date}</p>
      <p className="text-white text-lg font-bold mt-8">
        <a
          href={event.youtube_playlist}
          className="bg-green p-2 no-underline text-white"
        >
          <i className="fab fa-twitch mr-1" />{' '}
          <span className="hover:underline">Watch now</span>
        </a>
      </p>
    </div>
  </div>
)

export default Event
