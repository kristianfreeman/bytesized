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
            primary_tag {
              name
              slug
            }
          }
        }
      }
    }
  `)

  const posts = get(data, 'allGhostPost.edges', []).map(({ node }) => node)
  return (
    <div className="w-full md:flex-1">
      <h4 className="text-2xl font-bold">Blog</h4>
      <p>Learn how to code with our free tutorials and guides</p>
      <div className="py-4">
        <div className="mt-4">
          {posts.map(post => (
            <div className={`py-2`}>
              <div className="text-xl text-red-800">
                <a className="hover:underline" href={post.slug}>
                  {post.title}
                </a>
                {post.primary_tag && (
                  <a
                    className="text-sm bg-orange-200 ml-2 text-orange-800 lowercase py-1 px-2 rounded-full"
                    href={post.primary_tag.slug}
                  >
                    {post.primary_tag.name}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Posts
