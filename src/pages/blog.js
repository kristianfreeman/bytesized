import React from 'react'
import { Link, graphql } from 'gatsby'
import { filter, get, orderBy } from 'lodash'

import Layout from '../components/Layout'
import Post from '../components/Post'
import s3Url from '../utils/s3Url'

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const posts = get(data, 'allGhostPost.edges', [])

    return (
      <Layout title="Blog">
        <div className="container mx-auto py-8 px-4 md:px-0 justify-between">
          {posts.map(({ node }) => (
            <Post key={node.id} full post={node} />
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
          excerpt
          primary_author {
            name
          }
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
