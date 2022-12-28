import React, { useState, useEffect } from "react"
import "./style.css"
// Styled components
import { ThemeProvider } from "styled-components"
import { Main } from "./Layout.styled"
// Theme
import { theme } from "../../theme"
// Components
import { Loader, SVGMap } from "../"
// Framer motion
import { motion, AnimatePresence } from "framer-motion"

export interface LayoutProps {
  bg?: "dark" | "ligth"
  children: any
}

const Layout = (props: LayoutProps) => {
  const { children, bg = "ligth" } = props

  const [loadPage, setLoadPage] = useState(false)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    if (document.readyState === "complete") {
      onPageLoad()
    } else {
      window.addEventListener("load", onPageLoad)
      return () => window.removeEventListener("load", onPageLoad)
    }
  }, [])

  const onPageLoad = () => {
    setTimeout(() => {
      setHiding(true)
    }, 3000)
  }

  useEffect(() => {
    setTimeout(() => {
      hiding && setLoadPage(true)
    }, 1000)
  }, [hiding])

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        {!loadPage && (
          <motion.div
            key="loader"
            style={{ position: "fixed", zIndex: 10 }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Loader hiding={hiding} bg={bg} />
          </motion.div>
        )}
      </AnimatePresence>

      {loadPage && (
        <Main bg={bg}>
          <SVGMap />
          <div className="content">{children}</div>
        </Main>
      )}
    </ThemeProvider>
  )
}

export default Layout