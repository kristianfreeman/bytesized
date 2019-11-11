import React from 'react'
import { get, orderBy } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'

import Post from './Post'

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allGhostPost(limit: 5) {
        edges {
          node {
            excerpt
            published_at
            primary_author {
              name
            }
            feature_image
            slug
            title
            primary_tag {
              name
              slug
            }
          }
        }
      }
    }
  `)

  const [first, ...posts] = get(data, 'allGhostPost.edges', []).map(
    ({ node }) => node
  )

  return (
    <div className="w-full md:flex-1 py-8">
      <div className="md:flex md:items-center">
        <div className="w-full md:flex-1">
          <h3 className="text-4xl font-bold mb-8">Learn</h3>
          <p className="text-xl measure-wide">
            Learn how to code with our free tutorials and guides.
          </p>
        </div>
        <div className="w-full md:flex-1 md:text-right mt-8 md:mt-0">
          <a
            className="bg-orange-800 hover:bg-orange-600 text-white transition-all px-4 py-2 shadow hover:shadow-2xl transition-all text-lg"
            href="/blog"
          >
            Read the Bytesized blog
          </a>
        </div>
      </div>
      <div className="py-8">
        <Post full post={first} />
        <div className="mt-8 flex flex-wrap items-stretch">
          {posts.map(post => (
            <Post post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Posts
