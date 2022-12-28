import { DefaultTheme } from "styled-components"

export type paletteTypes = "ligth" | "dark" | "white" | "black" | "orange"

export const theme: DefaultTheme = {
  margin: {
    vertical: "1em",
    horizontal: "2em",
  },
  colors: {
    ligth: "#FFFCEF",
    dark: "#131313",
    white: "#FFFFFF",
    black: "#000000",
    orange: "#D95350",
    green: "#96CEB3",
    yellow: "#FFEEAE"
  },
  sizes: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
}

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const media = theme.sizes
