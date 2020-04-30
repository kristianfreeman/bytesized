import React from 'react'
import { Link } from 'gatsby'

import Social from '../Social'
import nav from './nav.png'

const Nav = () => (
  <div className="container mx-auto md:w-full bg-white pt-6">
    <Social alignment="right" size="lg" />
    <div className="flex justify-center items-center w-full">
      <Link title="Bytesized" to="/">
        <img alt="Bytesized" className="h-48" src={nav} />
      </Link>
    </div>
    <div className="text-center my-8 lg:text-xl hidden md:block">
      <Link
        className="hover:font-bold hover:text-blue-800 transition-all mx-4"
        activeClassName="font-bold text-blue-800"
        to="/about"
      >
        👋 About
      </Link>
      <Link
        className="mx-4"
        to="/conference"
        activeClassName="font-bold text-orange-800"
      >
        📺 Byteconf
      </Link>
      <a className="mx-4" href="https://www.patreon.com/bytesizedcode">
        💖 Patreon
      </a>
      <Link
        className="mx-4"
        to="/blog/"
        activeClassName="font-bold text-orange-800"
      >
        📝 Blog
      </Link>
      <a className="mx-4" href="https://www.bytesized.xyz/newsletter">
        📰 Newsletter
      </a>
      <a className="mx-4" href="https://www.bytesized.xyz/sponsors">
        💼 Sponsorship
      </a>
    </div>
  </div>
)

export default Nav
