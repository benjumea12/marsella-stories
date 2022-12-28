// Styled components
import styled from "styled-components"
// Interfaces
import { LayoutProps } from "./Layout";
export const Main = styled.div<LayoutProps>`
  background-color: ${props => props.bg === "ligth" ? props.theme.colors.ligth : props.theme.colors.dark };
  .content {
    position: relative;
    z-index: 2;
  }
`

