import React, { useState } from "react"
// Styled components
import { Main } from "./Loader.styled"
// Framer motion
import { motion, AnimatePresence } from "framer-motion"
// Theme 
import { theme } from "../../theme";

export const AnimateIcon = (props: { 
  duration: number
  bg: "dark" | "ligth" 
}) => {
  const { duration, bg } = props
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 217 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M5 141.943C16.8286 169.214 131.171 216.857 212 141.943H5Z"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linejoin="round"
      />
      <motion.path
        d="M98.6429 200.1H80.9C85.1714 202.071 93.7143 208.38 93.7143 217.843C93.7143 227.306 93.7143 254.643 93.7143 267.129H123.286V217.843C123.614 211.929 126.243 200.1 134.129 200.1H116.386M98.6429 200.1V182.357H116.386V200.1M98.6429 200.1H116.386M107.514 79.8429V57.1715M107.514 57.1715L111.457 42.3857M107.514 57.1715H96.6714M107.514 57.1715H118.357M107.514 57.1715L102.586 42.3857M107.514 79.8429H143C118.357 111.386 78.2714 92.9857 72.0286 79.8429H107.514ZM72.0286 284.871V267.129H142.014V284.871H72.0286ZM98.6429 141.943V97.5857H116.386V141.943H98.6429Z"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        d="M115 31C116.269 28.5714 120.246 22.7714 126 19"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0, x: 0, rotate: 0 }}
        animate={{ y: -5, x: 8, rotate: 10 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M141 10.9958C143.559 10.0153 150.379 8.29933 157.188 9.28017"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0, x: 0, rotate: 0 }}
        animate={{ y: 0, x: 10, rotate: 10 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M173 11.7463C175.703 12.1939 182.455 14.1614 187.834 18.4502"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0, x: 0, rotate: 0 }}
        animate={{ y: 5, x: 8, rotate: 15 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M197.766 30C199.613 32.024 203.701 37.7464 205.275 44.4438"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0, x: 0, rotate: 0 }}
        animate={{ y: 10, x: 2, rotate: 10 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M206 60V75"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M206 91V106"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M206 120.5V127.5"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 10, opacity: 0 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.path
        d="M100 31C98.8462 28.5714 95.2308 22.7714 90 19"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0, x: 0, rotate: 0 }}
        animate={{ y: -5, x: -8, rotate: -10 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M73.7348 10.9958C71.1499 10.0153 64.2604 8.29933 57.3815 9.28017"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0, x: 0, rotate: 0 }}
        animate={{ y: 0, x: -10, rotate: -10 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M41.4085 11.7463C38.6775 12.1939 31.857 14.1614 26.4229 18.4502"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0, x: 0, rotate: 0 }}
        animate={{ y: 5, x: -8, rotate: -15 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M16.3897 30C14.5236 32.024 10.3942 37.7464 8.80467 44.4438"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0, x: 0, rotate: 0 }}
        animate={{ y: 10, x: -2, rotate: -10 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M8 60V75"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M8 91V106"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M8 120V127"
        stroke={theme.colors[bg]}
        stroke-width="10"
        stroke-linecap="round"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 10, opacity: 0 }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </svg>
  )
}

export interface LoaderProps {
  hiding: boolean
  bg: "dark" | "ligth"
}

const Loader = (props: LoaderProps) => {
  const { hiding, bg } = props

  return (
    <Main {...props}>
      <AnimatePresence>
        {!hiding && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <AnimateIcon bg={bg === "dark" ? "ligth" : "dark"} duration={0.4} />
          </motion.div>
        )}
      </AnimatePresence>
    </Main>
  )
}

export default Loader
