const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

// To add the slug field to each post
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    createNodeField({
      name: "slug",
      node,
      // 2015-01-01-name-of-post -> name-of-post
      value: `/${slug.slice(12)}`,
    })
  }
}

// cria uma page para cada post
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // query que faz a busca dos slugs para retornar pages
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              image
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node, next, previous }, index) => {
    createPage({
      path: node.fields.slug,
      // path -> pega caminho exato da pasta
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
        previousPost: next,
        nextPost: previous,
      },
    })
  })

  const postsPerPage = 6
  // Math.ceil -> arredonda para o maior número
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/` : `/page/${index + 1}`,
      component: path.resolve(`./src/templates/blog-list.js`),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })
}
