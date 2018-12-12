import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <div className="bg-white w-full border-b fixed z-50">
    <div className="bg-red w-full py-2 px-4 border-b z-50 text-center">
      <p className="font-semibold uppercase text-center">
        <i className="fa fa-tree mr-2 text-white" />
        <a className="no-underline text-white hover:underline" href="/merry">
          We're giving away over $700 in web dev courses, subscriptions and more
        </a>
        <i className="fa fa-tree ml-2 text-white" />
      </p>
    </div>
    <div className="flex flex-wrap px-4 md:justify-between py-4 container mx-auto">
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
