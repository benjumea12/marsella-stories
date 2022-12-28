import React from "react"
// Styled components
import { H1, H2, H3, H4, H5, H6, P, P2 } from "./Typography.styled"
// Theme
import { paletteTypes } from "../../theme"

// Interfaces
interface ITypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "p2"
  bg: paletteTypes
  children: any
  align: "left" | "right" | "center"
}

export type TypographyAttributes = ITypographyProps &
  React.HTMLAttributes<HTMLElement>

const Typography = (props: TypographyAttributes): JSX.Element => {
  const { variant } = props

  switch (variant) {
    case "h1":
      return <H1 {...props}>{props.children}</H1>
    case "h2":
      return <H2 {...props}>{props.children}</H2>
    case "h3":
      return <H3 {...props}>{props.children}</H3>
    case "h4":
      return <H4 {...props}>{props.children}</H4>
    case "h5":
      return <H5 {...props}>{props.children}</H5>
    case "h6":
      return <H6 {...props}>{props.children}</H6>
    case "p":
      return <P {...props}>{props.children}</P>
    case "p2":
      return <P2 {...props}>{props.children}</P2>
    default:
      return <P {...props}>{props.children}</P>
  }
}

export default Typography
