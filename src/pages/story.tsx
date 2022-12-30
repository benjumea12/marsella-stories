import React, { useState, useEffect } from "react"
import type { HeadFC } from "gatsby"
// Styled components
import {
  Main,
  ProgressMain,
  imgMotion,
  itemMotionShowLeft,
  ButtonActionMain,
  itemMotionHideLeft,
  itemMotionHideRight,
  itemMotionShowRight,
} from "../styled/story.styled"
// Components
import { Layout, Header, Footer, Typography } from "../components"
// Theme
import { getRandomInt } from "../theme"
// Images
import picture1 from "../images/picture-1.png"
import picture2 from "../images/picture-2.png"
import arrow from "../images/arrow-single.png"
import iconClose from "../images/icon-close.png"
// Framer motion
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"

const itemsSteps = [
  {
    start: 0,
    end: 5,
  },
  {
    start: 5,
    end: 10,
  },
]

const items: Array<{
  type: "title" | "paragraph" | "image"
  align?: "left" | "right" | "center"
  value: any
}> = [
  {
    type: "title",
    value: "Lorem Ipsum is simply dummy",
  },
  {
    type: "image",
    value: picture1,
  },
  {
    type: "paragraph",
    align: "left",
    value:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
  },
  {
    type: "paragraph",
    align: "right",
    value:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
  },
  {
    type: "image",
    value: picture2,
  },
  {
    type: "paragraph",
    align: "left",
    value:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
  },
  {
    type: "image",
    value: picture1,
  },
  {
    type: "paragraph",
    align: "right",
    value:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
  },
  {
    type: "paragraph",
    align: "right",
    value:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
  },
  {
    type: "image",
    value: picture2,
  },
]

const Progress = (props: { progress: number }) => {
  return (
    <ProgressMain>
      <motion.div
        className="line"
        animate={{
          width: `${props.progress}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      />
    </ProgressMain>
  )
}

const Title = (props: { title: string }) => {
  return (
    <React.Fragment>
      {props.title.split(" ").map((item, index) => (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.5 + 0.4 * index,
          }}
        >
          <Typography align="left" bg="orange" variant="h1">
            {item}
          </Typography>
        </motion.div>
      ))}
    </React.Fragment>
  )
}

const ButtonAction = (props: { onNext: any; onPrev: any }) => {
  return (
    <ButtonActionMain>
      <div className="button-item icon-prev" onClick={props.onPrev}>
        <img className="icon " src={arrow} />
      </div>
      <div className="button-item icon-next" onClick={props.onNext}>
        <img className="icon " src={arrow} />
      </div>
    </ButtonActionMain>
  )
}

const StoryPage = () => {
  const [changing, setChanging] = useState(false)
  const [progressTab, setProgressTab] = useState(0)
  const [hide, setHide] = useState(false)
  const [direction, setDirection] = useState<"right" | "left">("right")
  const [selectedId, setSelectedId] = useState<any>(null)
  const [open, setOpen] = useState(false)

  const [paginator, setPaginator] = useState({
    start: 0,
    end: 5,
  })

  const getTransition = () => {
    return progressTab === 0
      ? {
          delay: getRandomInt(4, 20) / 10 + 1,
          type: "spring",
          stiffness: 260,
          damping: 30,
        }
      : {
          delay: getRandomInt(4, 20) / 10,
          type: "spring",
          stiffness: 260,
          damping: 30,
        }
  }

  useEffect(() => {
    setPaginator(itemsSteps[progressTab])
  }, [progressTab])

  useEffect(() => {
    setHide(true)

    setTimeout(() => {
      if (changing) {
        if (direction === "right") {
          if (progressTab < 1) {
            setProgressTab(progressTab + 1)
          }
        } else {
          if (progressTab > 0) {
            setProgressTab(progressTab - 1)
          }
        }
      }
      setChanging(false)
      setHide(false)
    }, 500)
  }, [changing])

  const handleNext = () => {
    setDirection("right")
    setChanging(true)
  }

  const handlePrev = () => {
    setDirection("left")
    setChanging(true)
  }

  return (
    <Layout bg="dark">
      <Header bg="ligth" open={() => setOpen(true)} />
      <ButtonAction onNext={handleNext} onPrev={handlePrev} />
      <AnimateSharedLayout>
        <Main>
          {open && (
            <div
              className="container-story-overflow"
            >
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
            </div>
          )}

          <AnimatePresence>
            {selectedId && (
              <motion.div
                className="modal-overlay"
                initial={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
                animate={{
                  backgroundColor: "rgba(0, 0, 0, .5)",
                }}
                exit={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  layoutId={`item-content-${selectedId}`}
                  className="modal-image"
                >
                  <motion.img
                    className="image"
                    src={items[selectedId].value}
                    layoutId={`item-image-${selectedId}`}
                  />
                  <motion.button
                    className="close"
                    onClick={() => setSelectedId(null)}
                  >
                    <img src={iconClose} alt="" />
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <Progress progress={(100 / items.length) * paginator.end} />
          <div className="container">
            {items.slice(paginator.start, paginator.end).map((item, index) => {
              if (item.type === "title") {
                return (
                  <div className="row-item" key={index}>
                    <AnimatePresence>
                      {!hide && (
                        <motion.div
                          className="title"
                          initial={{
                            ...(direction === "right"
                              ? itemMotionShowLeft.initial
                              : itemMotionShowRight.initial),
                          }}
                          animate={{
                            ...(direction === "right"
                              ? itemMotionShowLeft.animate
                              : itemMotionShowRight.animate),
                            transition: {
                              type: "spring",
                              stiffness: 260,
                              damping: 30,
                            },
                          }}
                          exit={
                            direction === "right"
                              ? itemMotionHideLeft
                              : itemMotionHideRight
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <Title title={item.value} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              if (item.type === "image") {
                return (
                  <motion.div
                    className="row-item"
                    layoutId={`item-content-${index}`}
                    onClick={() => setSelectedId(index)}
                  >
                    <AnimatePresence>
                      {!hide && (
                        <motion.img
                          key={`imagen-${index}`}
                          layoutId={`item-image-${index}`}
                          className="picture"
                          src={item.value}
                          whileHover={imgMotion.whileHover}
                          initial={{
                            ...imgMotion.initial,
                            ...(direction === "right"
                              ? itemMotionShowLeft.initial
                              : itemMotionShowRight.initial),
                          }}
                          animate={{
                            ...(direction === "right"
                              ? itemMotionShowLeft.animate
                              : itemMotionShowRight.animate),
                            transition: getTransition(),
                          }}
                          exit={
                            direction === "right"
                              ? itemMotionHideLeft
                              : itemMotionHideRight
                          }
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              }

              if (item.type === "paragraph") {
                return (
                  <div className="row-item">
                    <Typography
                      className="paragraph"
                      align={item.align ? item.align : "left"}
                      bg="white"
                      variant="p"
                    >
                      {!hide && (
                        <motion.div
                          initial={{
                            ...(direction === "right"
                              ? itemMotionShowLeft.initial
                              : itemMotionShowRight.initial),
                          }}
                          animate={{
                            ...(direction === "right"
                              ? itemMotionShowLeft.animate
                              : itemMotionShowRight.animate),
                            transition: getTransition(),
                          }}
                          exit={
                            direction === "right"
                              ? itemMotionHideLeft
                              : itemMotionHideRight
                          }
                          transition={{ duration: 0.3 }}
                        >
                          {item.value}
                        </motion.div>
                      )}
                    </Typography>
                  </div>
                )
              }
            })}
          </div>
        </Main>
      </AnimateSharedLayout>
      <Footer bg="ligth" />
    </Layout>
  )
}

export default StoryPage

export const Head: HeadFC = () => <title>Historias de Marsella</title>
