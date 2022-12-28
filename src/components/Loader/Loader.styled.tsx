// Styled components
import styled from "styled-components"
// interfaces
import { LoaderProps } from "./Loader";

export const Main = styled.div<LoaderProps>`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors[props.bg]};
`
