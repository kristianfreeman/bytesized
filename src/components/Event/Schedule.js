import * as React from 'react'

import { DateTime } from 'luxon'
import RelativeTime from '../RelativeTime'
import Talk from '../Talk'
import { groupBy, orderBy } from 'lodash'

const Schedule = ({ event }) => {
  const groupedTalks = groupBy(event.talks, talk =>
    DateTime.fromISO(talk.time)
      .setZone('UTC')
      .toISODate()
  )

  return (
    <div className="text-center py-24">
      <h3 className="text-3xl font-bold">Schedule</h3>

      <div className="mt-8 mb-12 max-w-xl mx-auto">
        <h4 className="text-xl">
          All times listed are in your browser's timezone,{' '}
          {Intl.DateTimeFormat().resolvedOptions().timeZone}.
        </h4>
      </div>

      <div>
        {Object.keys(groupedTalks).map(key => {
          return (
            <div className="mt-24" key={key}>
              <h2 className="text-lg uppercase tracking-widest font-semibold">
                <RelativeTime date={DateTime.fromISO(key)} />
              </h2>
              {orderBy(groupedTalks[key], 'position').map(talk => (
                <Talk
                  key={talk._id}
                  company={false}
                  social={false}
                  talk={talk}
                />
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Schedule
