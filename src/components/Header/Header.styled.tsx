// Styled components
import styled from "styled-components"
// Theme
import { media } from "../../theme"

export const Main = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  padding: ${(props) => props.theme.margin.vertical} ${(props) => props.theme.margin.horizontal};
  .logo {
    height: 60px;
  }
  .logo-ligth {
    height: 50px;
    cursor: pointer;
  }

  @media (max-width: ${media.xl}) {
    .logo {
      height: 50px;
    }
    .logo-ligth {
      height: 40px;
    }
  }

  @media (max-width: ${media.xl}) {
    padding: 1em 1.5em
  }
`
