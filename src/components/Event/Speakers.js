import * as React from 'react'

import Speaker from '../Speaker'

const EventSpeakers = ({ event }) => (
  <>
    <h3 className="text-3xl font-bold">Speakers</h3>

    <div className="flex flex-wrap mt-10 mx-10 justify-center">
      {event.event_speakers.map(({ speaker }) => (
        <Speaker key={speaker._id} speaker={speaker} />
      ))}
    </div>
  </>
)

export default EventSpeakers
