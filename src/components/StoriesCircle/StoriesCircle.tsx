import React, { useState, Fragment } from "react"
import { navigate } from "gatsby"
// Components
import { Typography } from "../"
// Styled components
import {
  Main,
  Circle,
  Point,
  motionStoryItem,
  motionPoint,
  motionImage,
} from "./StoriesCircle.styled"
// Theme
import { getRandomInt } from "../../theme"
// Images
import church from "../../images/church-icon.png"
// Framer motion
import { motion } from "framer-motion"
// data
import picture1 from "../../images/picture-1.png"

const pointsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export type StoriePointProps = {
  rotation: number
  width: number
  delay: number
  handleOpen: any
}

const StoriePoint = (props: StoriePointProps) => {
  const { width, delay, handleOpen } = props

  const navigateStory = () => {
    setTimeout(() => {
      navigate("/story")
    }, 600)
  }

  return (
    <Point {...props}>
      <motion.div
        className="story-item"
        initial={motionStoryItem.initial}
        animate={{ width: `${width}%` }}
        transition={{ ...motionStoryItem.transition, delay: delay }}
      >
        <div className="line"></div>
        <motion.div
          className="point"
          initial={motionPoint.initial}
          animate={motionPoint.animate}
          whileHover={motionPoint.whileHover}
          whileTap={motionPoint.whileTap}
          transition={motionPoint.transition}
          onClick={() => {
            navigateStory()
            handleOpen()
          }}
        >
          <motion.img
            className="image"
            src={picture1}
            initial={motionImage.initial}
            whileHover={motionImage.whileHover}
            transition={motionImage.transition}
          />
        </motion.div>
      </motion.div>
    </Point>
  )
}

const StoriesCircle = (props: any) => {
  const [open, setOpen] = useState(false)

  return (
    <Main>
      <Typography className="title" variant="h2" bg="orange" align="right">
        <motion.div
          initial={{
            opacity: 0,
            translateX: "-100%",
          }}
          animate={{
            opacity: 1,
            translateX: "0%",
          }}
          transition={{
            duration: 0.8,
            delay: 3.5,
          }}
        >
          Feliz el pueblo <br /> cuya historia
        </motion.div>
      </Typography>
      <Circle>
        {pointsArray.map((item: any, index: number) => (
          <StoriePoint
            rotation={(360 / pointsArray.length) * index}
            width={getRandomInt(50, 95)}
            delay={getRandomInt(500, 600) / 100}
            handleOpen={() => setOpen(true)}
          />
        ))}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.5,
            duration: 0.5,
          }}
          className="church-contain"
        >
          <img className="church-icon" src={church} alt="Icono de iglesia" />
          <motion.div
            className="story-overflow"
            animate={
              open
                ? {
                    height: "120vw",
                    width: "120vw",
                    left: "-10vw",
                    top: "-35vw",
                  }
                : {}
            }
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </Circle>
      <Typography className="title" variant="h2" bg="orange" align="left">
        <motion.div
          initial={{
            opacity: 0,
            translateX: "100%",
          }}
          animate={{
            opacity: 1,
            translateX: "0%",
          }}
          transition={{
            duration: 0.8,
            delay: 3.8,
          }}
        >
          se lee con <br /> aburrimiento.
        </motion.div>
      </Typography>
    </Main>
  )
}

export default StoriesCircle