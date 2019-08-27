import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <div className="bg-white w-full border-b fixed z-50">
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
          href="http://confcodeofconduct.com/"
        >
          😍 Code of Conduct
        </a>
        <a
          className="text-black text-sm font-bold uppercase mr-4 no-underline"
          href="https://www.bytesized.xyz"
        >
          📰 Blog
        </a>
        <Link
          className="text-black text-sm font-bold uppercase mr-4 no-underline"
          to="/s/newsletter"
        >
          💌 Newsletter
        </Link>
      </div>
    </div>
  </div>
)

export default Nav
