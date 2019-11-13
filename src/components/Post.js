import React from 'react'
import ReactMarkdown from 'react-markdown'

import { Link } from 'gatsby'

const Post = ({ post }) => (
  <Link className="font-bold pb-8 odd:pr-8 w-full md:w-1/2" to={post.slug}>
    <div className={`w-full h-full`}>
      <div className="bg-white rounded-lg shadow hover:shadow-xl transition-all p-8 text-2xl flex items-center h-full border border-gray-200">
        {post.title}
      </div>
    </div>
  </Link>
)

const Full = ({ post }) => (
  <Link className="w-full h-full bg-white flex-1 mb-4" to={`/` + post.slug}>
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition-all p-8 flex flex-col h-full my-4 border border-gray-200">
      <div className="flex">
        <h3 className="text-3xl font-bold flex-1">{post.title}</h3>
        {post.featured && (
          <span className="flex items-center justify-center uppercase leading-tight font-bold hover:text-yellow-600 transition-all">
            <span className="fas fa-star mr-2 align-middle" />
            Featured
          </span>
        )}
      </div>
      <h4 className="text-xl py-4">By {post.primary_author.name}</h4>
      <ReactMarkdown
        allowedTypes={['root', 'text', 'paragraph']}
        className="hidden md:block py-8 text-lg italic text-gray-800 leading-normal"
        source={post.excerpt}
      />
      <p className="text-xl">
        Published {new Date(post.published_at).toLocaleDateString('en-US')}
      </p>
    </div>
  </Link>
)

const Switcher = ({ full, post }) =>
  full ? <Full post={post} /> : <Post post={post} />

export default Switcher
