import React from 'react'
import { Link } from 'gatsby'

const Nav = ({ title = 'Bytesized', showSubtitle = true }) => (
  <div className="container mx-auto bg-white py-12">
    <div className="flex">
      <div className="flex-1 px-4 md:px-0">
        <a className="font-bold text-5xl" href="/">
          {title}
        </a>
        {showSubtitle && (
          <div class="w-1/2 mt-2">
            Learn to code with free guides, screencasts, and{' '}
            <span class="font-bold">Byteconf</span>, a free programming
            conference series, streamed online
          </div>
        )}
      </div>
      <div className="hidden md:flex items-center justify-center">
        <a className="ml-8 no-underline" href="/s/youtube">
          YouTube
        </a>
        <a
          className="ml-8 no-underline bg-blue-900 text-white rounded-full p-4 font-bold"
          href="https://bytesized.xyz/newsletter"
        >
          Join our newsletter
        </a>
      </div>
    </div>
  </div>
)

export default Nav
