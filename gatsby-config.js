require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const fs = require('fs')
const { buildClientSchema } = require('graphql')

module.exports = {
  siteMetadata: {
    title: 'Bytesized',
    author: 'Bytesized',
    description: 'A developer community for everyone',
    siteUrl: 'https://www.bytesized.xyz',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-107917910-6`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/MdxLayout.js'),
        },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://blog.bytesized.xyz`,
        contentApiKey: `04c5f19f6ffede798a15d61f7e`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '82qqyrei',
        dataset: 'byteconf',
        watchMode: process.env.NODE_ENV == 'development',
        overlayDrafts: process.env.NODE_ENV == 'development',
        token: process.env.SANITY_READ_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bytesized Code`,
        short_name: `Bytesized Code`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/byteconf-full.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
