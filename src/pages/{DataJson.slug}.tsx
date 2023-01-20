import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import type { PageProps } from "gatsby"
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
import { motion, AnimatePresence } from "framer-motion"

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
          key={index}
        >
          <Typography align="left" bg="orange" variant="h1">
            {item}
          </Typography>
        </motion.div>
      ))}
    </React.Fragment>
  )
}

const ButtonAction = (props: {
  onNext: any
  onPrev: any
  disableNext: boolean
  disablePrev: boolean
}) => {
  console.log(props.disableNext, props.disablePrev)

  return (
    <ButtonActionMain>
      <button
        className="button-item icon-prev"
        onClick={props.onPrev}
        disabled={props.disablePrev}
      >
        <img className="icon " src={arrow} />
      </button>
      <button
        className="button-item icon-next"
        onClick={props.onNext}
        disabled={props.disableNext}
      >
        <img className="icon " src={arrow} />
      </button>
    </ButtonActionMain>
  )
}

const StoryPage = ({ data }: PageProps<Queries.StoryPageQuery>) => {
  const storyData = data.allDataJson.edges[0].node

  const [changing, setChanging] = useState(false)
  const [progressTab, setProgressTab] = useState(0)
  const [hide, setHide] = useState(false)
  const [direction, setDirection] = useState<"right" | "left">("right")
  const [selectedId, setSelectedId] = useState<any>(null)
  const [open, setOpen] = useState(false)
  const [disableNext, setDisableNext] = useState(false)
  const [disablePrev, setDisablePrev] = useState(true)

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
          console.log(itemsSteps.length);
          
          setProgressTab(progressTab + 1)
          if (progressTab + 1 === itemsSteps.length - 1) {
            setDisableNext(true)
          }
          setDisablePrev(false)
        }
        if (direction === "left") {
            setProgressTab(progressTab - 1)
            if (progressTab === 1) {
              setDisablePrev(true)
            }
            setDisableNext(false)
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
      <ButtonAction
        onNext={handleNext}
        onPrev={handlePrev}
        disableNext={disableNext}
        disablePrev={disablePrev}
      />

      <Main>
        {open && (
          <div className="container-story-overflow">
            <motion.div
              className="story-overflow"
              animate={
                open
                  ? window.innerWidth > 992
                    ? {
                        height: "120vw",
                        width: "120vw",
                        left: "-10vw",
                        top: "-35vw",
                      }
                    : {
                        height: "120vh",
                        width: "120vh",
                        left: "-35vh",
                        top: "-10vh",
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
                <div className={`row-item row-${item.type}`} key={index}>
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
                  className={`row-item row-${item.type}`}
                  layoutId={`item-content-${index}`}
                  onClick={() => setSelectedId(index)}
                  key={index}
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
                <div className={`row-item row-${item.type}`} key={index}>
                  {!hide && (
                    <motion.div
                      className="paragraph"
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
                      <Typography
                        align={item.align ? item.align : "left"}
                        bg="white"
                        variant="p"
                      >
                        {item.value}
                      </Typography>
                    </motion.div>
                  )}
                </div>
              )
            }
          })}
        </div>
      </Main>
      <Footer bg="ligth" />
    </Layout>
  )
}

export default StoryPage

export const query = graphql`
  query StoryPage($slug: String) {
    allDataJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          text
          slug
        }
      }
    }
  }
`
