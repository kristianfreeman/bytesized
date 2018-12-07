const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const routes = [
    {
      fromPath: '/s/youtube',
      toPath: 'https://youtube.com/byteconf',
    },
    {
      fromPath: '/s/instagram',
      toPath: 'https://instagram.com/byteconf',
    },
    {
      fromPath: '/s/medium',
      toPath: 'https://medium.com/byteconf',
    },
    {
      fromPath: '/s/github',
      toPath: 'https://github.com/byteconf',
    },
    {
      fromPath: '/s/patreon',
      toPath: 'https://patreon.com/byteconf',
    },
    {
      fromPath: '/patrons',
      toPath: 'https://patreon.com/byteconf',
    },
    {
      fromPath: '/s/twitch',
      toPath: 'https://twitch.tv/byteconf',
    },
    {
      fromPath: '/discord',
      toPath: 'https://discordapp.com/invite/KnzprSD',
    },
    {
      fromPath: '/s/discord',
      toPath: 'https://discordapp.com/invite/KnzprSD',
    },
    {
      fromPath: '/s/newsletter',
      toPath: 'https://mailchi.mp/bytesized/byteconf',
    },
    {
      fromPath: '/s/blog',
      toPath: 'https://blog.byteconf.com',
    },
    {
      fromPath: '/s/twitter',
      toPath: 'https://twitter.com/byteconf',
    },
    {
      fromPath: '/sponsor',
      toPath: 'https://bytesized.typeform.com/to/wBXCdI',
    },
    {
      fromPath: '/sponsors',
      toPath: 'https://bytesized.typeform.com/to/wBXCdI',
    },
  ]

  routes.forEach(({ fromPath, toPath, redirectInBrowser = true }) => {
    createRedirect({
      fromPath,
      toPath,
      redirectInBrowser,
    })
  })

  return new Promise((resolve, reject) => {
    const eventTemplate = path.resolve(`src/templates/event.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            sanity {
              allEvents {
                slug
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.sanity.allEvents.forEach(({ slug }) => {
          createPage({
            path: slug,
            component: eventTemplate,
            context: {
              slug,
            },
          })
        })
      })
    )
  })
}
