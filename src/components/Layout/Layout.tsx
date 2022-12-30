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
    }, 2000)
  }

  useEffect(() => {
    setTimeout(() => {
      hiding && setLoadPage(true)
    }, 800)
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
            transition={{ duration: 1 }}
          >
            <Loader hiding={hiding} bg={bg} />
          </motion.div>
        )}
      </AnimatePresence>

      {loadPage && (
        <Main bg={bg}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0,
              duration: 1,
            }}
          >
            <SVGMap bg={bg} />
            <div className="content">{children}</div>
          </motion.div>
        </Main>
      )}
    </ThemeProvider>
  )
}

export default Layout
