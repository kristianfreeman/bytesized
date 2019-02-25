import * as React from 'react'
import S3Url from '../utils/s3Url'
import RelativeTime from './RelativeTime'
import TalkLevel from './TalkLevel'
import Markdown from 'react-markdown'

const Talk = ({
  company,
  social,
  talk: {
    description,
    slides,
    event_speaker: { available_live, speaker },
    level,
    name,
    time,
  },
}) => (
  <div className="bg-white mx-auto max-w-md shadow-lg rounded-lg overflow-hidden my-8">
    <div className="sm:flex sm:items-center px-6 py-4">
      <img
        src={S3Url(speaker.static_image_path)}
        className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-6 sm:ml-0"
        alt={speaker.name}
      />
      <div className="text-center sm:text-left sm:flex-grow">
        <div className="mb-4">
          {time && (
            <p className="text-2xl leading-tight text-grey-darkest tracking-wide mb-2">
              <RelativeTime date={time} type="time" />
            </p>
          )}
          <p className="text-xl leading-tight font-bold text-black mb-2">
            {name}
          </p>
          <p className="text-xs leading-tight my-4">
            <TalkLevel level={level} />
          </p>
          <p className="text-md leading-tight text-grey-dark">{speaker.name}</p>
          {company && (
            <p className="mt-1 text-grey-dark text-base">{speaker.company}</p>
          )}
          {social && <span>social here</span>}
        </div>

        {description && (
          <div className="text-black leading-tight pb-2">
            <Markdown source={description} />
          </div>
        )}

        {available_live && (
          <div
            className="flex items-center bg-blue text-white text-sm font-bold p-4 mt-2"
            role="alert"
          >
            <i className="text-white fas fa-comment-dots fa-lg mr-2" />
            <p>Speaker will participate in live chat during the conference</p>
          </div>
        )}

        {slides && (
          <div className="my-4">
            <a
              className="border rounded-lg border-black hover:bg-grey-light hover:border-grey-light p-2 no-underline"
              href={slides}
            >
              <i className="fas fa-folder text-black fa-md" />
              <span className="text-black ml-1">View the slides</span>
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Talk
