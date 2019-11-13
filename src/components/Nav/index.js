import React from 'react'
import { Link } from 'gatsby'

import Social from '../Social'
import nav from './nav.png'

const Nav = () => (
  <div className="container mx-auto md:w-full bg-white pt-6">
    <Social alignment="right" size="lg" />
    <div className="flex justify-center items-center w-full">
      <Link alt="Bytesized" to="/">
        <img className="h-48" src={nav} />
      </Link>
    </div>
    <div className="text-center my-8 lg:text-xl hidden md:block">
      <Link
        className="hover:font-bold hover:text-red-800 transition-all mx-8"
        to="/conference"
      >
        Byteconf
      </Link>
      <Link
        className="hover:font-bold hover:text-red-800 transition-all mx-8"
        to="/videos"
      >
        Videos
      </Link>
      <Link
        className="hover:font-bold hover:text-red-800 transition-all mx-8"
        to="/javascript"
      >
        JavaScript
      </Link>
      <Link
        className="hover:font-bold hover:text-red-800 transition-all mx-8"
        to="/react"
      >
        React
      </Link>
      <Link
        className="hover:font-bold hover:text-red-800 transition-all mx-8"
        to="/career"
      >
        Career
      </Link>
      <Link
        className="hover:font-bold hover:text-red-800 transition-all mx-8"
        to="/blog"
      >
        Blog
      </Link>
      <a
        className="hover:font-bold hover:text-red-800 transition-all mx-8"
        href="/newsletter"
      >
        Newsletter
      </a>
    </div>
  </div>
)

export default Nav
