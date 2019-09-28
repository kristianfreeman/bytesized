import React from 'react'
import { Link } from 'gatsby'

const Nav = ({ customTitle = 'Bytesized', showSubtitle = true }) => (
  <div className="container mx-auto md:w-full bg-white py-12">
    <div className="flex">
      <div className="flex-1 px-4 md:px-0">
        <h1 className="text-5xl">
          {customTitle ? (
            <span className="font-bold">{customTitle}</span>
          ) : (
            <a className="font-bold" href="/">
              Bytesized
            </a>
          )}
        </h1>
        {showSubtitle && (
          <div class="w-full md:w-1/2 mt-2">
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
          className="ml-8 no-underline bg-orange-200 text-orange-800 rounded-full p-4 font-bold"
          href="https://www.bytesized.xyz/newsletter"
        >
          Join our newsletter
        </a>
      </div>
    </div>
  </div>
)

export default Nav
