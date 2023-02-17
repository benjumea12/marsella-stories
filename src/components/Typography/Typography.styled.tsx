import styled from "styled-components"
// Theme
import { media } from "../../theme"
// Interfaces
import { TypographyAttributes } from "./Typography"

export const H1 = styled.h1<TypographyAttributes>`
  margin: 0px;
  font-size: 60px;
  font-weight: bold;
  line-height: 115%;
  color: ${(props) => props.theme.colors[props.bg]};
  text-align: ${(props) => props.align};

  @media (max-width: ${media.lg}) {
    font-size: 9vw;
  }
`

export const H2 = styled.h2<TypographyAttributes>`
  margin: 0px;
  font-size: 7vh;
  font-weight: bold;
  line-height: 115%;
  color: ${(props) => props.theme.colors[props.bg]};
  text-align: ${(props) => props.align};

  @media (max-width: ${media.xl}) {
    font-size: 6vh;
  }
  @media (max-width: ${media.lg}) {
    font-size: 9vw;
  }
`

export const H3 = styled.h3<TypographyAttributes>`
  margin: 0px;
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.colors[props.bg]};
  text-align: ${(props) => props.align};
  line-height: 15pt;
`

export const H4 = styled.h4<TypographyAttributes>`
  margin: 4px 30px;
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.colors[props.bg]};
  text-align: ${(props) => props.align};
  line-height: 15pt;
`

export const H5 = styled.h5<TypographyAttributes>`
  margin: 4px 0px;
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.colors[props.bg]};
  text-align: ${(props) => props.align};
  line-height: 13pt;
`

export const H6 = styled.h6<TypographyAttributes>`
  margin: 4px 0px;
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors[props.bg]};
  text-align: ${(props) => props.align};
  line-height: 13pt;
`

export const P = styled.p<TypographyAttributes>`
  margin: 4px 0px;
  font-size: 25px;
  line-height: 120%;
  color: ${(props) => props.theme.colors[props.bg]};
  text-align: ${(props) => props.align};

  @media (max-width: ${media.xl}) {
    font-size: 19px;
  }
`
export const P2 = styled.p<TypographyAttributes>`
  margin: 4px 0px;
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.colors[props.bg]};
  text-align: ${(props) => props.align};
`
