// Styled components
import styled from "styled-components"

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

  .container {
    padding: 3% 6% 6% 6%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

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
      }
      .paragraph {
        position: absolute;
        width: 80%;
        z-index: 5;
      }
    }
  }
`

export const ProgressMain = styled.div`
  position: absolute;
  left: 2%;
  bottom: ${(props) => props.theme.margin.vertical};
  width: 400px;
  height: 8px;
  border-radius: 5px;
  background-color: #404040;
  display: flex;

  .line {
    height: 100%;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.green};
  }
`

export const ButtonActionMain = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 5;

  bottom: 40px;
  left: 2%;

  .button-item {
    padding: 10px 15px;
    background-color: ${(props) => props.theme.colors.yellow};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    height: 3vh;
  }

  .icon-prev {
    transform: rotate(180deg);
    margin-right: 10px;
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