import * as React from 'react'

import S3Url from '../utils/s3Url'

const Speaker = ({ speaker }) => (
  <div className="sm:w-full md:w-1/5 rounded overflow-hidden shadow-lg mx-2 my-4">
    <div className="flex items-center w-full" style={{ maxHeight: '342px' }}>
      <img src={S3Url(speaker.static_image_path)} alt={speaker.name} />
    </div>

    <div className="px-6 py-4 border-solid border-t-4">
      <div className="font-bold text-xl mb-2">{speaker.name}</div>
      <p className="text-grey-darker text-base">{speaker.company}</p>
      <div className="mt-4">
        {speaker.twitter && (
          <a
            href={speaker.twitter}
            className="no-underline mr-2"
            title="Twitter"
          >
            <i className="fab fa-twitter text-black fa-lg" />
          </a>
        )}
        {speaker.github && (
          <a href={speaker.github} className="no-underline mr-2" title="GitHub">
            <i className="fab fa-github text-black fa-lg" />
          </a>
        )}
        {speaker.website && (
          <a
            href={speaker.website}
            className="no-underline mr-2"
            title="Website"
          >
            <i className="fas fa-link text-black fa-lg" />
          </a>
        )}
      </div>
    </div>
  </div>
)

export default Speaker
