# Bytesized

👋 This is the source code for [bytesized.xyz](https://www.bytesized.xyz)!

Bytesized Code is [my](https://www.bytesized.xyz) project bringing you screencasts, tutorials, blog posts, and Byteconf -- a free developer conference series, streamed online (like [Byteconf React](https://www.bytesized.xyz/react-2018))!

This website is the landing page for all the Byteconf events, and an increasing number of additional things like [blog posts](https://www.bytesized.xyz), newsletter landing pages, etc.

The tech stack:

- The site is built with [Gatsby](https://gatsbyjs.org)
- Event, speaker, and talk data is sourced from our [Sanity.io](https://sanity.io) instance. Our Sanity.io schema is open-source, [check it out](https://github.com/byteconf/byteconf-sanity-schema)!
- Blog posts are sourced from our [Ghost](https://ghost.org) instance. [Interested in contributing?](https://www.bytesized.xyz/accepting-story-submissions)
- The site is deployed hourly using GitHub Pages, and hosted with [Cloudflare Workers](https://workers.cloudflare.com).

We're interested in contributions, but we're still trying to figure out how to do that well! More to come soon 👀

## Running in development

`gatsby develop`
