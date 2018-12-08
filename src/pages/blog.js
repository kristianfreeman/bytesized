import React from 'react'
import { Link, graphql } from 'gatsby'
import { get, orderBy } from 'lodash'

import Layout from '../components/Layout'
import s3Url from '../utils/s3Url'

const Post = ({ post }) => (
  <div className={`rounded overflow-hidden w-full py-4`}>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">
        <a
          className="text-3xl text-black no-underline hover:underline"
          href={`/blog/${post.slug}`}
        >
          {post.title}
        </a>
      </div>
      <p>Published {new Date(post.published_at).toLocaleDateString('en-US')}</p>
      {post.custom_excerpt && (
        <p className="text-grey-darker text-base">{post.custom_excerpt}</p>
      )}
    </div>
    <div className="px-6 py-4 md:py-0">
      {post.tags.map(tag => (
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
          {tag.name}
        </span>
      ))}
    </div>
  </div>
)

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const posts = get(data, 'allGhostPost.edges', [])

    return (
      <Layout>
        <div className="container flex flex-wrap mx-auto py-8 sm:px-4 justify-between max-w-lg">
          {posts.map(({ node }) => (
            <Post key={node.id} post={node} />
          ))}
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    allGhostPost(sort: { order: DESC, fields: [published_at] }) {
      edges {
        node {
          id
          title
          featured
          feature_image
          published_at
          slug
          tags {
            name
            slug
          }
        }
      }
    }
  }
`
