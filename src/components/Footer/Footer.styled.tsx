// Styled components
import styled from "styled-components"
// Interfaces
import { footerProps } from "./Footer"
// Theme
import { media } from "../../theme"

export const Main = styled.div<footerProps>`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${(props) => props.theme.margin.vertical};
  color: ${(props) =>
    props.bg === "dark" ? props.theme.colors.dark : props.theme.colors.white};

  .text {
    font-weight: 600;
  }

  .authors {
    font-weight: bold;
    margin-left: 50px;
    margin-right: ${(props) => props.theme.margin.horizontal};
    color: ${(props) =>
      props.bg === "dark" ? props.theme.colors.dark : props.theme.colors.white};
  }

  @media (max-width: ${media.lg}) {
    flex-direction: column;
    text-align: center;
  }
`
