import React from "react"
// Styled components
import { Main } from "./Footer.styled"

export interface footerProps {
  bg: "dark" | "ligth"
}

const Footer = (props: footerProps) => {
  const { bg } = props

  return (
    <Main bg={bg}>
      <div className="content">
        <div className="item">
          <p className="text">Un proyecto de</p>
          <a href="#" className="authors">
            @Ana Maria Peña Gómes
          </a>
        </div>
        <div className="item">
          <p className="text">Desallorado por</p>
          <a href="#" className="authors">
            @Esteban Benjumea Castrillon
          </a>
        </div>
      </div>
    </Main>
  )
}

export default Footer
