import React from 'react'

const Nav = () => (
  <div className="bg-white w-full px-4 border-b">
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
          href="https://patreon.com/byteconf"
        >
          😍 Support Us
        </a>
        <a
          className="text-black text-sm font-bold uppercase mr-4 no-underline"
          href="https://blog.byteconf.com"
        >
          📰 Blog
        </a>
        <a
          className="text-black text-sm font-bold uppercase mr-4 no-underline"
          href="https://discordapp.com/invite/KnzprSD"
        >
          💬 Chat
        </a>
      </div>
    </div>
  </div>
)

export default Nav
