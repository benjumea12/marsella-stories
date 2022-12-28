// Styled components
import styled from "styled-components"
// Theme
import { media } from "../../theme"
// Types
import { StoriePointProps } from "./StoriesCircle"

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .title {
    //width: 400px;
  }
`

export const Circle = styled.div`
  position: relative;
  height: 70vh;
  width: 70vh;
  border-radius: 100%;
  border: 2px solid ${(props) => props.theme.colors.black};
  margin: 0 3em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${media.xl}) {
    height: 65vh;
    width: 65vh;
  }

  .church-contain {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.ligth};

    .story-overflow {
      position: fixed;
      border-radius: 100%;
      //box-shadow: 00px 0px 50px 50px ${(props) => props.theme.colors.dark};
      background-color: ${(props) => props.theme.colors.dark};
    }

    .church-icon {
      height: 90px;
    }

    @media (max-width: ${media.xl}) {
      .church-icon {
        height: 50px;
      }
    }
  }
`

export const Point = styled.div<StoriePointProps>`
  position: absolute;
  width: 50%;
  height: 10px;
  transform: rotate(${(props) => props.rotation + 20}deg) translateX(50%)
    rotate(0deg);

  .story-item {
    position: relative;
    height: 10px;
    display: flex;
    align-items: center;

    .line {
      width: calc(100% - 40px);
      height: 2px;
      background-color: ${(props) => props.theme.colors.black};
    }
    .point {
      height: 40px;
      width: 40px;
      border-radius: 100%;
      background-color: ${(props) => props.theme.colors.black};
      cursor: pointer;
      position: relative;

      .image {
        height: 100%;
        width: 100%;
        border-radius: 100%;
        transform: rotate(-${(props) => props.rotation + 20}deg);
      }

      @media (max-width: ${media.xl}) {
        height: 30px;
        width: 30px;
      }
    }
  }
`

export const motionStoryItem = {
  initial: { width: "0%" },
  transition: {
    type: "spring",
    stiffness: 150,
    damping: 20,
    mass: 2,
  },
}

export const motionPoint = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  whileHover: { scale: 1.5 },
  whileTap: { scale: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
}

export const motionImage = {
  initial: { opacity: 0 },
  whileHover: { opacity: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
}