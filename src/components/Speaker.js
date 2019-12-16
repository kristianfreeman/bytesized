import * as React from 'react'
import Img from 'gatsby-image'

import S3Url from '../utils/s3Url'

const Speaker = ({ speaker }) => {
  return (
    <div className="sm:w-full md:w-1/4 overflow-hidden m-8">
      <div className="flex items-center justify-center w-full h-auto shadow-md">
        {speaker.image ? (
          <img
            className="grayscale-1 hover:grayscale-0 transition-all"
            srcSet={speaker.image.asset.fluid.srcSet}
            src={speaker.image.asset.fluid.src}
          />
        ) : (
          <img
            className="w-full h-full grayscale-1 hover:grayscale-0 transition-all"
            src={S3Url(speaker.static_image_path)}
            alt={speaker.name}
          />
        )}
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{speaker.name}</div>
        <p className="text-lg">{speaker.company}</p>
        <div className="mt-4">
          {speaker.twitter && (
            <a
              href={speaker.twitter}
              className="no-underline mr-4"
              title="Twitter"
            >
              <i className="fab fa-twitter text-gray-600 hover:text-blue-800 transition-all fa-2x" />
            </a>
          )}
          {speaker.github && (
            <a
              href={speaker.github}
              className="no-underline mr-4"
              title="GitHub"
            >
              <i className="fab fa-github text-gray-600 hover:text-black transition-all fa-2x" />
            </a>
          )}
          {speaker.website && (
            <a href={speaker.website} className="no-underline" title="Website">
              <i className="fas fa-link text-gray-600 hover:text-green-900 transition-all fa-2x" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Speaker
