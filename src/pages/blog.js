import React from 'react'
import { Link, graphql } from 'gatsby'
import { filter, get, orderBy } from 'lodash'

import Layout from '../components/Layout'
import Nav from '../components/Nav'
import s3Url from '../utils/s3Url'

const Post = ({ post }) => (
  <div className={`rounded overflow-hidden w-full py-4`}>
    <div className="px-6 py-4">
      {post.featured && (
        <p className="font-bold tracking-wide text-yellow-dark uppercase mb-2">
          Featured
        </p>
      )}
      <div className="font-bold text-yellow text-xl mb-2">
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

    const featured = filter(posts, ({ node }) => node.featured)
    const rest = filter(posts, ({ node }) => !node.featured)

    return (
      <Layout>
        <Nav />
        <div className="container flex flex-wrap mx-auto py-8 sm:px-4 justify-between max-w-lg">
          {featured.map(({ node }) => (
            <Post key={node.id} post={node} />
          ))}
          {rest.map(({ node }) => (
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
