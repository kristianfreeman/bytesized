import * as React from 'react'

import Talk from '../Talk'
import { orderBy } from 'lodash'

const Schedule = ({ event }) => (
  <div className="bg-black text-white text-center py-16">
    <h3 className="text-3xl text-bold uppercase">Schedule</h3>

    <div className="my-6 max-w-lg mx-auto">
      <h4 className="text-xl text-grey font-normal mb-4">
        All times listed are in your browser's timezone,{' '}
        {Intl.DateTimeFormat().resolvedOptions().timeZone}.
      </h4>
    </div>

    <div className="mt-12 mx-10">
      {orderBy(event.talks, 'position').map(talk => (
        <Talk key={talk._id} company={false} social={false} talk={talk} />
      ))}
    </div>
  </div>
)

export default Schedule
