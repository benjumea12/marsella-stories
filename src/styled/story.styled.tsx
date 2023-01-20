// Styled components
import styled from "styled-components"
// Theme
import { media } from "../theme"

export const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: stretch;

  .modal-overlay {
    position: absolute;
    z-index: 10;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-image {
      position: absolute;
      .image {
        height: 80vh;
        border-radius: 10px;
        @media (max-width: ${media.lg}) {
          height: auto;
          width: 80vw;
        }
      }

      .close {
        position: absolute;
        top: -30px;
        right: -30px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        img {
          height: 20px;
        }
      }
    }
  }

  .container-story-overflow {
    position: fixed;
    z-index: 10;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .story-overflow {
      position: fixed;
      border-radius: 100%;
      background-color: ${(props) => props.theme.colors.ligth};
    }
  }

  .container {
    padding: 3% 6% 6% 6%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: ${media.lg}) {
      flex-direction: column;
      margin-top: 6em;
      height: 65vh;
      align-items: center;
      justify-content: space-between;
    }

    .row-item {
      position: relative;
      height: 50%;
      width: 33.3333%;
      display: flex;
      align-items: center;
      justify-content: center;

      .title {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        width: 120%;
        left: 0;
        position: absolute;
        z-index: 5;

        h1 {
          margin-right: 20px;
        }
      }
      .picture {
        height: 105%;
        position: absolute;
        border-radius: 10px;
        cursor: pointer;
        object-fit: cover;
      }
      .paragraph {
        position: absolute;
        width: 80%;
        z-index: 5;
      }
      @media (max-width: ${media.lg}) {
        height: 10px;
      }
    }
    @media (max-width: ${media.lg}) {
      .row-title {
        width: 100%;
      }
      .row-image {
        width: 100%;
        .picture {
          height: auto;
          height: 18vh;
          width: 70%;
        }
      }
      .row-paragraph {
        width: 100%;
        .paragraph {
          width: 100%;
        }
      }
    }
  }
`

export const ProgressMain = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${(props) => props.theme.margin.vertical};
  margin: auto;
  width: 30%;
  height: 8px;
  border-radius: 5px;
  background-color: #404040;
  display: flex;

  .line {
    height: 100%;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.green};
  }
  @media (max-width: ${media.lg}) {
    bottom: 4.8em;
    width: 90%;
  }
`

export const ButtonActionMain = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 0px;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 5;

  .button-item {
    position: absolute;
    right: 0;
    padding: 30px 15px;
    background-color: ${(props) => props.theme.colors.yellow};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    &:disabled {
      cursor: auto;
      opacity: .5;
    }
    .icon {
      height: 3vh;
      margin-left: 5px;
    }
    transition: all 300ms;
  }

  .icon-prev {
    left: 0;
    right: auto;
    transform: rotate(180deg);
  }

  @media (max-width: ${media.lg}) {
    justify-content: flex-end;
    width: auto;
    top: auto;
    right: 5%;
    bottom: 2.2em;
    .button-item {
      position: relative;
      padding: 8px 18px;
      .icon {
        height: 2.5vh;
      }
    }
    .icon-prev {
      margin-right: 10px;
    }
  }
`

export const imgMotion = {
  initial: {
    filter: "blur(0px)",
  },
  whileHover: {
    filter: "blur(0px)",
    scale: 1.05,
    zIndex: 10,
  },
}
export const itemMotionShowLeft = {
  initial: {
    opacity: 0.0,
    translateX: "20%",
  },
  animate: {
    opacity: 1,
    translateX: "0%",
  },
}

export const itemMotionShowRight = {
  initial: {
    opacity: 0.0,
    translateX: "-20%",
  },
  animate: {
    opacity: 1,
    translateX: "0%",
  },
}

export const itemMotionHideLeft = {
  opacity: 0,
  translateX: "-20%",
}

export const itemMotionHideRight = {
  opacity: 0,
  translateX: "20%",
}
