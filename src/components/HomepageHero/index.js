import React from 'react'
import { first, get, orderBy } from 'lodash'
import { Link, useStaticQuery, graphql } from 'gatsby'

import S3Url from '../../utils/s3Url'

const HomepageHero = () => {
  const data = useStaticQuery(graphql`
    query {
      allGhostPost(limit: 1, sort: { fields: [published_at], order: DESC }) {
        edges {
          node {
            slug
            title
            published_at
            feature_image
          }
        }
      }
      sanity {
        # Need to re-add published filter
        allEvents {
          name
          description
          slug
          start_date
          cover_path
          status
        }
      }
    }
  `)

  const posts = get(data, 'allGhostPost.edges', []).map(p => p.node)
  const heroPost = first(orderBy(posts, 'published_at', 'desc'))

  const events = get(data, 'sanity.allEvents', [])
  const heroEvent = first(orderBy(events, 'start_date', 'desc'))

  const heroItem =
    heroEvent.status === 'upcoming'
      ? {
          name: heroEvent.name,
          slug: heroEvent.slug,
          description: heroEvent.description,
          image: S3Url(heroEvent.cover_path || 'headers/attendees.jpg'),
        }
      : {
          name: heroPost.title,
          slug: heroPost.slug,
          description: heroPost.description,
          image: heroPost.feature_image,
        }

  return (
    <Link to={heroItem.slug}>
      <div
        className="heroContainer w-full flex flex-col items-center justify-center shadow-inner my-8 hover:lighten transition-all"
        style={{
          backgroundImage: `url(${heroItem.image})`,
          backgroundPosition: 'center',
          backgroundSize: `cover`,
          minHeight: '50vh',
        }}
      >
        <div className="px-3 py-2 -mb-6 bg-orange-800 z-10 rounded-lg shadow">
          <span className="font-bold text-white text-xl">What's new</span>
        </div>
        <div className="p-8 bg-white rounded-lg text-center shadow hover:shadow-2xl transition-all">
          <h1 className="text-black transition-all hover:text-gray-800 text-4xl font-bold measure-narrow">
            {heroItem.name}
          </h1>
          {heroItem.description && (
            <p className="text-black text-xl">{heroItem.description}</p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default HomepageHero
