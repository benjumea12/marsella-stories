import React from "react"
// Styled components
import { Main } from "./Footer.styled"

export interface footerProps {
  bg: "dark" | "ligth"
}

const Footer = (props:footerProps) => {
  const { bg } = props

  return (
    <Main bg={bg}>
      <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" className="authors">@Ana Maria Peña Gomes</a>
    </Main>
  )
}

export default Footer
