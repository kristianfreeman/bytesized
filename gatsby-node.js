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
  const { createPage } = actions

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
