import React from "react"
import { Link } from "gatsby"
// Styled components
import { Main } from "./Header.styled"
// Images
import logoBlack from "../../images/logo-black.svg"
import logoWhite from "../../images/logo-white.svg"

interface headerProps {
  bg: "dark" | "ligth"
}

const Header = (props: headerProps) => {
  const { bg } = props

  return (
    <Main>
      <Link to="/">
        {bg === "dark" && (
          <img className="logo" src={logoBlack} alt="Logo historias Marsella" />
        )}
        {bg === "ligth" && (
          <img className="logo-ligth" src={logoWhite} alt="Logo historias Marsella" />
        )}
      </Link>
    </Main>
  )
}

export default Header
