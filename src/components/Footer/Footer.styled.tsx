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
  color: ${(props) =>
    props.bg === "dark" ? props.theme.colors.dark : props.theme.colors.white};

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${(props) => props.theme.margin.horizontal};
    padding-bottom: ${(props) => props.theme.margin.vertical};
    .item {
      display: flex;
      align-items: center;
      .text {
        font-weight: 600;
      }

      .authors {
        font-weight: bold;
        margin-left: 5px;
        color: ${(props) =>
          props.bg === "dark"
            ? props.theme.colors.dark
            : props.theme.colors.white};
      }
    }
  }

  @media (max-width: ${media.lg}) {
    display: none;
  }
`
