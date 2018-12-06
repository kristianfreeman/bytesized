import * as React from 'react'

import Speaker from '../Speaker'

const EventSpeakers = ({ event }) => (
  <div className="bg-white text-black text-center py-16">
    <h3 className="text-3xl text-bold uppercase">Speakers</h3>

    <div className="flex flex-wrap mt-10 mx-10 justify-center">
      {event.event_speakers.map(({ speaker }) => (
        <Speaker key={speaker.id} speaker={speaker} />
      ))}
    </div>
  </div>
)

export default EventSpeakers
