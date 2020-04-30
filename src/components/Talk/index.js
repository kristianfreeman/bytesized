import * as React from 'react'
import S3Url from '../../utils/s3Url'
import RelativeTime from '../RelativeTime'
import TalkLevel from './Level'
import Markdown from 'react-markdown'

import './index.css'

const Talk = ({ company, social, talk }) => {
  const { description, slides, event_speaker, level, name, time } = talk
  const { available_live, speaker } = event_speaker

  return (
    <div className="bg-white mx-0 md:mx-auto w-full md:max-w-3xl md:shadow md:rounded overflow-hidden my-8">
      <div className="sm:flex sm:items-center pt-8 md:p-12">
        <div className="text-center sm:text-left sm:flex-grow">
          <div className="flex mb-8 items-center justify-center">
            <div className="flex-1">
              {time && (
                <p className="text-2xl leading-tight text-grey-darkest tracking-wide py-2">
                  <RelativeTime date={time} type="time" /> {' / '}
                  <RelativeTime date={time} type="time" timezone="GMT" />
                </p>
              )}
              <p className="text-3xl leading-tight font-bold text-black py-4 pb-2 measure-wide">
                {name}
              </p>
              <p className="text-xs pt-4">
                <TalkLevel level={level} />
              </p>
            </div>
          </div>
          <div className="flex mb-4 items-center justify-center">
            <div className="flex-1">
              <p className="text-2xl font-bold leading-tight">{speaker.name}</p>
              {speaker.company && (
                <p className="mt-1 text-gray-dark text-xl">{speaker.company}</p>
              )}
            </div>
            {speaker.image ? (
              <img
                className="grayscale-1 hover:grayscale-0 transition-all rounded-full"
                srcset={speaker.image.asset.fluid.srcset}
                src={speaker.image.asset.fluid.src}
              />
            ) : (
              <img
                className="w-full h-full grayscale-1 hover:grayscale-0 transition-all rounded-full"
                src={S3Url(speaker.static_image_path)}
                alt={speaker.name}
              />
            )}
          </div>

          {description && (
            <div className="text-lg leading-relaxed py-8">
              <Markdown className="talk-description" source={description} />
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
            <div className="mt-4 flex items-center">
              <a className="p-4 no-underline bg-gray-200" href={slides}>
                <i className="text-gray-500 fas fa-link mr-2" />
                <span className="text-gray-800">
                  Download the slides for this talk
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Talk
