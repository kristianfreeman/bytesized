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
    <div className="bg-black text-white text-center py-16">
      <h3 className="text-3xl text-bold uppercase">Schedule</h3>

      <div className="my-6 max-w-lg mx-auto">
        <h4 className="text-xl text-grey font-normal mb-4">
          All times listed are in your browser's timezone,{' '}
          {Intl.DateTimeFormat().resolvedOptions().timeZone}.
        </h4>
      </div>

      <div className="mt-12 mx-10">
        {Object.keys(groupedTalks).map(key => {
          return (
            <div className="pt-2" key={key}>
              <h2>
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
