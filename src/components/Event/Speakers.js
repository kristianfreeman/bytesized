import * as React from 'react'

import Speaker from '../Speaker'

const EventSpeakers = ({ event }) => (
  <>
    <h3 className="text-3xl font-bold">Speakers</h3>

    <div className="max-w-md md:max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 px-4 md:px-16">
        {event.event_speakers.map(({ speaker }) => (
          <Speaker key={speaker._id} speaker={speaker} />
        ))}
      </div>
    </div>
  </>
)

export default EventSpeakers
