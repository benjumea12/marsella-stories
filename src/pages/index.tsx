import React from "react"
import { graphql } from "gatsby"
import type { PageProps } from "gatsby"
// Styled components
import { Main } from "../styled/index.styled"
// Components
import { Layout, Header, Footer, StoriesCircle } from "../components"

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  console.log(data.allDataJson.edges)

  return (
    <Layout>
      <Header bg="dark" />
      <Main>
        <StoriesCircle storiesPoints={[]} />
      </Main>
      <Footer bg="dark" />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    allDataJson {
      edges {
        node {
          id
          title
          text
          slug
        }
      }
    }
  }
`
