import * as React from 'react'

import { Link } from 'gatsby'

import logo from '../assets/byteconf-no-bg.png'
import Social from './Social'

const Footer = () => (
  <div className="p-8">
    <div className="lg:flex w-full mb-16">
      <div className="w-full lg:flex-1 lg:border-dashed lg:border-r lg:border-gray-400">
        <Link title="Bytesized" to="/">
          <img alt="Bytesized" className="w-32 h-32 mb-8" src={logo} />
        </Link>
        <div className="ml-2">
          <Social alignment="left" />
        </div>
      </div>
      <div className="w-full lg:mx-0 mx-4 lg:flex-1 lg:border-dashed lg:border-r lg:border-gray-400 mt-8 lg:mt-0 lg:flex lg:flex-col lg:items-center lg:justify-center">
        <h4 className="font-bold text-xl mb-8">Bytesized Code</h4>
        <ul className="flex flex-wrap">
          <li className="w-1/3 my-2">
            <Link
              className="hover:text-red-800 transition-all"
              to="/conference"
            >
              Byteconf
            </Link>
          </li>
          <li className="w-1/3 my-2">
            <Link className="hover:text-red-800 transition-all" to="/videos">
              Videos
            </Link>
          </li>
          <li className="w-1/3 my-2">
            <Link
              className="hover:text-red-800 transition-all"
              to="/javascript"
            >
              JavaScript
            </Link>
          </li>
          <li className="w-1/3 my-2">
            <Link className="hover:text-red-800 transition-all" to="/react">
              React
            </Link>
          </li>
          <li className="w-1/3 my-2">
            <Link className="hover:text-red-800 transition-all" to="/career">
              Career
            </Link>
          </li>
          <li className="w-1/3 my-2">
            <Link className="hover:text-red-800 transition-all" to="/blog">
              Blog
            </Link>
          </li>
          <li className="w-1/3 my-2">
            <a className="hover:text-red-800 transition-all" href="/newsletter">
              Newsletter
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:mx-0 mx-4 lg:flex-1 lg:flex lg:items-center lg:justify-center mt-8 lg:mt-0">
        <p className="w-2/3">
          Byteconf attendees and speakers are expected to follow our{' '}
          <a
            className="hover:text-red-800 transition-all font-bold"
            href="http://confcodeofconduct.com/"
          >
            Conference Code of Conduct
          </a>
          .
        </p>
      </div>
    </div>

    <div className="flex flex-grow flex-col mx-auto text-black text-center mt-8">
      <p className="block leading-normal text-sm sm:mx-6 md:mx-24 py-8">
        © Copyright Bytesized, LLC 2018-2019. All Rights Reserved.
      </p>
    </div>
  </div>
)

export default Footer
