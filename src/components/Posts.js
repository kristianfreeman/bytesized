import React from 'react'
import { get, orderBy } from 'lodash'
import { Link, useStaticQuery, graphql } from 'gatsby'

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
    <div className="w-full md:flex-1 pt-8">
      <div className="md:flex md:items-center">
        <div className="w-full md:flex-1">
          <h3 className="text-4xl font-bold mb-8">Learn</h3>
          <p className="text-xl measure-wide">
            Learn how to code with our free tutorials and guides.
          </p>
        </div>
        <div className="w-full md:flex-1 md:text-right mt-8 md:mt-0">
          <Link
            className="bg-orange-800 hover:bg-orange-700 text-white transition-all px-4 py-2 shadow hover:shadow-2xl transition-all text-lg rounded"
            to="/blog"
          >
            Read the Bytesized blog
          </Link>
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
