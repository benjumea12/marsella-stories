import React, { useState } from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { motion } from "framer-motion"
// Styled components
import { Main } from "./Header.styled"
// Images
import logoBlack from "../../images/logo-black.svg"
import logoWhite from "../../images/logo-white.svg"

interface headerProps {
  bg: "dark" | "ligth"
  open?: any
}

const Header = (props: headerProps) => {
  const { bg, open } = props

  const navigateStory = () => {
    setTimeout(() => {
      navigate("/")
    }, 600)
  }

  return (
    <Main>
      <Link to="/">
        {bg === "dark" && (
          <img className="logo" src={logoBlack} alt="Logo historias Marsella" />
        )}
      </Link>
      {bg === "ligth" && (
        <img
          className="logo-ligth"
          src={logoWhite}
          alt="Logo historias Marsella"
          onClick={() => {
            open()
            navigateStory()
          }}
        />
      )}
    </Main>
  )
}

export default Header
