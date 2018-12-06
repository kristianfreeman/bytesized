const fs = require('fs')
const { buildClientSchema } = require('graphql')

const createSpectrumSchema = async () => {
  const json = JSON.parse(
    fs.readFileSync(`${__dirname}/src/utils/spectrumIntrospection.json`)
  )
  return buildClientSchema(json.data)
}

module.exports = {
  siteMetadata: {
    title: 'Byteconf',
    author: 'Bytesized',
    description: 'A developer community for everyone',
    siteUrl: 'https://www.byteconf.com',
  },
  // pathPrefix: '/gatsby-starter-blog',
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'SANITY',
        fieldName: 'sanity',
        refetchInterval: 60,
        url: 'https://82qqyrei.api.sanity.io/v1/graphql/byteconf/default',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'SPECTRUM',
        fieldName: 'spectrum',
        url: 'https://spectrum.chat/api',
        refetchInterval: 60,
        createSchema: createSpectrumSchema,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'SANITY',
        fieldName: 'sanity',
        refetchInterval: 60,
        url: 'https://82qqyrei.api.sanity.io/v1/graphql/byteconf/default',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'SPECTRUM',
        fieldName: 'spectrum',
        url: 'https://spectrum.chat/api',
        refetchInterval: 60,
        createSchema: createSpectrumSchema,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
