const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
import { GatsbyNode } from "gatsby"

/*
If you know that certain types will definitely exist, you can define types which will result in TS types not being nullable. By defining SiteMetadata here the types in src/pages/completed.tsx for siteMetadata.title are of type string, not string | null
*/

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }
    type SiteMetadata {
      title: String!
      siteUrl: String!
      description: String!
    }
  `)
}


exports.onCreateNode = ({ node, getNode, actions }:any) => {
  const { createNodeField } = actions

  if (node.internal.type === `File`) {

    const res = createFilePath({ node, getNode, basePath: `pages` }).split('.')
    const slug = `${res[0]}/`
    const project = res[0].split('/')[1]

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      node,
      name: `project`,
      value: project,
    })
  }
}