import React from 'react'
import { Link, graphql } from 'gatsby'
import { filter, get, orderBy } from 'lodash'

import Layout from '../components/Layout'
import Nav from '../components/Nav'
import s3Url from '../utils/s3Url'

const Post = ({ post }) => (
  <div className={`rounded overflow-hidden w-full py-4`}>
    <div className="py-4">
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
  </div>
)

class Tag extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { name } = pageContext
    const posts = get(data, 'allGhostPost.edges', [])

    return (
      <Layout>
        <Nav />
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex flex-wrap py-8 justify-between">
            {posts.map(({ node }) => (
              <Post key={node.id} post={node} />
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagPostsQuery($slug: String!) {
    allGhostPost(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      edges {
        node {
          id
          custom_excerpt
          slug
          title
          published_at
        }
      }
    }
  }
`

export default Tag
