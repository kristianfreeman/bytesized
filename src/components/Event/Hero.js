import * as React from 'react'
import * as moment from 'moment'

import illustration from './illustration.svg'
import './illustration.css'
import { DateTime } from 'luxon'
import RelativeTime from '../RelativeTime'

const RSVP = ({ event: { name, ck_rsvp_form_id } }) => (
  <div className="bg-white p-12 w-full md:flex-1 md:w-1/3 shadow shadow-lg mt-8 md:mt-0 md:ml-16 md:m-8 text-center">
    <h2 className="text-2xl font-bold mb-8">RSVP for {name}</h2>
    <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
    <form
      action={`https://app.convertkit.com/forms/${ck_rsvp_form_id}/subscriptions`}
      class="seva-form formkit-form"
      method="post"
      data-sv-form={ck_rsvp_form_id}
      data-format="inline"
      data-version="5"
    >
      <input
        class="formkit-input shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline text-xl"
        aria-label="Your first name"
        name="fields[first_name]"
        placeholder="Your first name"
        required
        type="text"
      />
      <input
        class="formkit-input shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline text-xl"
        name="email_address"
        placeholder="Your email address"
        required
        type="email"
      />
      <button
        data-element="submit"
        class="formkit-submit text-white bg-orange-800 hover:bg-orange-600 transition-all font-bold p-4 text-lg rounded"
        type="submit"
      >
        <span>Send me my free ticket</span>
      </button>
    </form>
  </div>
)

const DateString = ({ start_date, end_date }) => {
  const start = DateTime.fromISO(start_date)
  const end = DateTime.fromISO(end_date)

  if (start.hasSame(end, 'day')) {
    return <RelativeTime date={start_date} />
  } else {
    return (
      <React.Fragment>
        <RelativeTime date={start_date} /> – <RelativeTime date={end_date} />
      </React.Fragment>
    )
  }
}

class EventHero extends React.Component {
  render() {
    const { event } = this.props

    return (
      <div className="px-4">
        <div className="container my-8 mx-4 md:mx-auto">
          <h1 className="text-4xl font-bold">{event.name}</h1>
        </div>
        <div className="md:flex items-center container mx-auto pt-8 pb-16">
          <div className="w-full md:flex-2 px-4 md:px-0 md:w-1/2">
            <div className="font-bold text-2xl mb-8">
              <DateString
                start_date={event.start_date}
                end_date={event.end_date}
              />
            </div>

            <div className="mt-4">
              <p className="block leading-normal text-2xl">
                {event.simple_copy}
              </p>
            </div>

            {event.youtube_playlist && (
              <div className="mt-12">
                <div className="py-4">
                  <a
                    className="py-2 px-4 rounded bg-red-800 hover:bg-red-600 transition-all text-white text-lg md:text-xl lg:text-xl shadow hover:shadow-xl"
                    href={event.youtube_playlist}
                  >
                    <i className="fab fa-youtube mr-2" />
                    Watch <span className="hidden lg:inline">
                      {event.name}
                    </span>{' '}
                    on YouTube
                  </a>
                </div>
              </div>
            )}
          </div>
          {event.status != 'finished' ? (
            <RSVP event={event} />
          ) : (
            <img
              alt={event.name}
              className="illustration transition-all hover:lighten-sm w-1/2 hidden lg:block"
              src={illustration}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EventHero
