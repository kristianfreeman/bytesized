import * as React from 'react'
import { DateTime } from 'luxon'

const pastFormat = 'MMMM d, yyyy'
const upcomingFormat = 'EEEE, MMMM d, yyyy'

const time = 't ZZZZ'

const RelativeTime = ({ date, type = 'date', timezone: zone }) => {
  const relativeTime = DateTime.fromISO(date, { zone })
  const past = DateTime.local() > relativeTime
  const format = type == 'date' ? (past ? pastFormat : upcomingFormat) : time
  const asString = relativeTime.toFormat(format)

  return (
    <time
      data-datetime={date}
      data-local="time"
      data-format={format}
      title={asString}
      data-localized=""
      aria-label={asString}
    >
      {asString}
    </time>
  )
}

export default RelativeTime
