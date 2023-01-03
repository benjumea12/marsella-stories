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
  @media (max-width: ${media.lg}) {
    flex-direction: column;
    .title {
      text-align: center;
    }
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

  @media (max-width: ${media.lg}) {
    height: 85vw;
    width: 85vw;
    margin: 2em 0;
  }

  .church-contain {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14vh;
    width: 14vh;
    border-radius: 100%;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.colors.ligth};

    .story-overflow {
      position: fixed;
      border-radius: 100%;
      background-color: ${(props) => props.theme.colors.dark};
    }

    .church-icon {
      height: 10vh;
    }

    @media (max-width: ${media.xl}) {
      .church-icon {
        height: 50px;
      }
    }

    @media (max-width: ${media.lg}) {
      height: 18vw;
      width: 18vw;

      .church-icon {
        height: 14vw;
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
    justify-content: flex-end;

    .line {
      width: calc(100% - 7vh);
      height: 2px;
      background-color: ${(props) => props.theme.colors.black};
    }
    .point {
      border-radius: 100%;
      background-color: ${(props) => props.theme.colors.black};
      cursor: pointer;
      right: 0;

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

      @media (max-width: ${media.lg}) {
        height: 5vh;
        width: 5vh;
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
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: {} },
  whileHover: { scale: 1.5 },
  whileTap: { scale: 1 },
  transition: {},
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
