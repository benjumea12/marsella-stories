import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { motion } from "framer-motion"
// Styled components
import { Main } from "../styled/index.styled"
// Components
import { Layout, Header, Footer, StoriesCircle } from "../components"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header bg="dark" />
      <Main>
        <StoriesCircle />
      </Main>
      <Footer bg="dark" />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Historias de Marsella</title>
