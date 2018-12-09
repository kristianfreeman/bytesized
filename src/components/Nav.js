import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <div className="bg-white w-full px-4 border-b fixed z-50">
    <div className="flex flex-wrap md:justify-between py-4 container mx-auto">
      <div className="flex-1 flex items-center">
        <a
          className="text-black text-sm font-extrabold uppercase mr-1 no-underline"
          href="/"
        >
          Byteconf
        </a>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <a
          className="text-black text-sm font-bold uppercase mr-4 no-underline"
          href="https://bytesized.typeform.com/to/wBXCdI"
        >
          🙌 Sponsor
        </a>
        <a
          className="text-black text-sm font-bold uppercase mr-4 no-underline"
          href="/s/patreon"
        >
          😍 Support Us
        </a>
        <Link
          className="text-black text-sm font-bold uppercase mr-4 no-underline"
          to="/blog"
        >
          📰 Blog
        </Link>
        <a
          className="text-black text-sm font-bold uppercase mr-4 no-underline"
          href="/discord"
        >
          💬 Chat
        </a>
      </div>
    </div>
  </div>
)

export default Nav
