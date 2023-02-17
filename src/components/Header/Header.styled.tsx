// Styled components
import styled from "styled-components"
// Theme
import { media } from "../../theme"

export const Main = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  display: flex;
  padding: ${(props) => props.theme.margin.vertical} 0;
  .logo {
    height: 60px;
    margin-left: ${(props) => props.theme.margin.horizontal};
  }
  .logo-ligth {
    height: 50px;
    cursor: pointer;
    margin-left: ${(props) => props.theme.margin.horizontal};
  }

  @media (max-width: ${media.xl}) {
    .logo {
      height: 50px;
      margin-right: ${(props) => props.theme.margin.horizontal};
    }
    .logo-ligth {
      height: 40px;
      margin-right: ${(props) => props.theme.margin.horizontal};
    }
  }

  @media (max-width: ${media.lg}) {
    padding: 0.8em 0;
    justify-content: flex-end;
  }
`
