import * as React from 'react'

import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

import './blogPost.scss'

const Author = ({
  author: { profile_image, name, bio, facebook, twitter, website },
}) => (
  <div className="author flex items-center pt-4 pb-12">
    {profile_image && (
      <img
        className="w-16 h-16 rounded-full mr-4"
        src={profile_image}
        alt={name}
      />
    )}
    <div>
      <p className="text-xl pb-2 text-black font-bold leading-none">{name}</p>
      <p className="text-grey-dark pb-4">{bio}</p>
      <p className="text-grey-dark">
        {facebook && (
          <a href={facebook}>
            <i className="text-black roman mr-4 fab fa-facebook" />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`}>
            <i className="text-black roman mr-4 fab fa-twitter" />
          </a>
        )}
        {website && (
          <a href={website}>
            <i className="text-black roman mr-4 fas fa-link" />
          </a>
        )}
      </p>
    </div>
  </div>
)

const Post = ({ data }) => {
  const post = data && data.ghostPost
  if (!post) {
    return null
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Byteconf</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="website" />
        {post.feature_image && (
          <meta property="twitter:image" content={post.feature_image} />
        )}
        {post.feature_image && (
          <meta property="og:image" content={post.feature_image} />
        )}
        {post.custom_excerpt && (
          <meta property="twitter:description" content={post.custom_excerpt} />
        )}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@byteconf" />
      </Helmet>
      <div className="container max-w-lg mx-auto text-center pt-8">
        <div className="uppercase tracking-wide text-blue font-semibold pb-4">
          {new Date(post.published_at).toLocaleDateString('en-US')}{' '}
          <span className="text-black font-light">&middot;</span>{' '}
          <span className="no-underline text-blue">
            {post.primary_tag.name}
          </span>
        </div>
        <h1 className="text-5xl m-0 mb-8">{post.title}</h1>
      </div>
      <div className="container blog-post mx-auto px-2 sm:w-full md:max-w-lg">
        <div
          className="post-full-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Author author={post.primary_author} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      id
      custom_excerpt
      feature_image
      html
      title
      feature_image
      published_at
      primary_tag {
        name
        slug
      }
      tags {
        name
        slug
      }
      primary_author {
        name
        bio
        slug
        profile_image
        website
        facebook
        twitter
      }
    }
  }
`

export default Post
