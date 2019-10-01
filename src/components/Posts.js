import React from 'react'
import { get, orderBy } from 'lodash'
import { useStaticQuery, graphql } from 'gatsby'

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allGhostPost(limit: 5) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)

  const posts = get(data, 'allGhostPost.edges', []).map(({ node }) => node)
  return (
    <div>
      <h4 className="text-2xl font-bold">Blog</h4>
      <p>Learn how to code with our free tutorials and guides</p>
      <div className="py-4">
        <div className="mt-4">
          {posts.map(post => (
            <div className={`flex flex-col py-2`}>
              <div className="text-xl text-red-800 flex items-center">
                <a className="hover:underline" href={post.slug}>
                  {post.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Posts
