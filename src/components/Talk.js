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
  <div className="bg-white mx-auto max-w-md shadow-lg rounded overflow-hidden my-8">
    <div className="sm:flex sm:items-center p-12">
      <div className="text-center sm:text-left sm:flex-grow">
        <div className="flex mb-4 items-center">
          <div className="flex-1">
            {time && (
              <p className="text-2xl leading-tight text-grey-darkest tracking-wide py-2">
                <RelativeTime date={time} type="time" />
              </p>
            )}
            <p className="text-2xl leading-tight font-bold text-black pt-4 pb-2">
              {name}
            </p>
            <p className="text-xl leading-tight pb-4">{speaker.name}</p>
            {company && (
              <p className="mt-1 text-grey-dark text-base">{speaker.company}</p>
            )}
            <p className="text-xs py-4">
              <TalkLevel level={level} />
            </p>
          </div>
          <img
            src={S3Url(speaker.static_image_path)}
            className="md:block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-6 sm:ml-0 hidden"
            alt={speaker.name}
          />
        </div>

        {description && (
          <div className="text-black leading-relaxed py-2">
            <Markdown source={description} />
          </div>
        )}

        {available_live && (
          <div
            className="flex items-center bg-blue-200 text-blue-800 p-4 mt-4"
            role="alert"
          >
            <i className="text-blue-400 fas fa-comment-dots fa-lg mr-2" />
            <p>Speaker will participate in live chat during the conference</p>
          </div>
        )}

        {slides && (
          <div className="my-8 flex items-center">
            <a className="p-2 no-underline" href={slides}>
              <i className="text-gray-500 fas fa-link mr-2" />
              <span className="text-gray-800">Slides</span>
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Talk
