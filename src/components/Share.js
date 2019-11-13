import React, { useState } from 'react'
import { useStaticQuery } from 'gatsby'

import lscache from 'lscache'

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
} from 'react-share'

const Share = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const url = data.site.siteMetadata.siteUrl + location.pathname
  const cacheKey = 'bytesizedShareClosed'

  const cachedClosed = lscache.get(cacheKey)
  const [closed, setClosed] = useState(cachedClosed)

  const close = () => {
    lscache.set(cacheKey, true, 60)
    setClosed(true)
  }

  if (closed) {
    return null
  }

  return (
    <div
      className="fixed bg-red-200 flex flex-col items-center justify-center hidden md:block"
      style={{ top: '33%', right: 0 }}
    >
      <i
        className="cursor-pointer fas fa-times text-red-800 p-2 w-full text-right"
        onClick={close}
      />
      <FacebookShareButton url={url}>
        <i className="px-4 py-6 fab fa-facebook text-red-800 fa-2x hover:text-green-500 transition-all" />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <i className="px-4 py-6 fab fa-twitter text-red-800 fa-2x hover:text-blue-800 transition-all" />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <i className="px-4 py-6 fab fa-linkedin text-red-800 fa-2x hover:text-blue-800 transition-all" />
      </LinkedinShareButton>
      <RedditShareButton url={url}>
        <i className="px-4 py-6 fab fa-reddit text-red-800 fa-2x hover:text-orange-700 transition-all" />
      </RedditShareButton>
    </div>
  )
}

export default Share
