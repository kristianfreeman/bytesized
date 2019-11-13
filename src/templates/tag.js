import React from 'react'
import { Link, graphql } from 'gatsby'
import { filter, get, orderBy } from 'lodash'

import Layout from '../components/Layout'
import Post from '../components/Post'
import s3Url from '../utils/s3Url'

class Tag extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { name } = pageContext
    const posts = get(data, 'allGhostPost.edges', [])
    const tag = data.ghostTag

    return (
      <Layout>
        <div className="mt-32 mb-16 container mx-auto px-4 md:px-0 flex items-center justify-center">
          {tag.feature_image && (
            <div className="flex-1 flex items-center justify-center">
              <img
                className="bg-white rounded-full shadow shadow-lg hover:shadow-2xl transition-all w-1/2 h-1/2 p-8"
                src={tag.feature_image}
              />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-4xl font-bold">{name}</h1>
            {tag.description && (
              <p className="py-8 text-2xl measure-wide">{tag.description}</p>
            )}
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-0">
          <div className="py-16 flex flex-col justify-between">
            {posts.map(({ node }) => (
              <Post full key={node.id} post={node} />
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagPostsQuery($slug: String!) {
    ghostTag(slug: { eq: $slug }) {
      description
      feature_image
      slug
    }
    allGhostPost(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      edges {
        node {
          id
          published_at
          primary_author {
            name
          }
          excerpt
          slug
          title
          published_at
        }
      }
    }
  }
`

export default Tag
