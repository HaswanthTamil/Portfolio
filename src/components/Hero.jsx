import React, { useEffect, useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion"
import {
  staggerContainer,
  fadeUp,
  fadeLeft,
  fadeIn,
  fadeUpBtn,
  navAnimation,
} from "../animations/animation"
import NavBar from "./NavBar"

const heroParagraph =
  "mt-8 mx-6 text-xl lg:text-2xl xl:text-4xl text-center md:text-left max-w-xl text-gray-300"

const Hero = ({ scrollToIndex }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const socialControls = useAnimation()
  const mainControls = useAnimation()

  useEffect(() => {
    mainControls.start("visible").then(() => {
      socialControls.start("visible")
    })
  }, [mainControls, socialControls])

  return (
    <>
      <div className="w-full relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full relative px-4 md:px-6 xl:px-20 2xl:px-32"
        >
          <div className="w-full h-40 md:h-1 xl:h-10 bg-transparent"></div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-10xl font-bold text-center md:text-left text-white my-6 mx-6 xl:my-8"
          >
            Haswanth Tamil
          </motion.h1>

          <motion.p
            variants={fadeLeft}
            style={{ color: "var(--purp)" }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-mint font-semibold text-center md:text-left my-6 mx-6"
          >
            Fullstack Developer
          </motion.p>

          <div className="h-5 md:h-1 xl:h-8 bg-transparent"></div>

          <motion.p
            variants={fadeIn}
            className={`${heroParagraph} xl:max-w-4xl xl:ml-6`}
          >
            I craft clean, animated websites that actually make people stop and
            stare.
          </motion.p>
          <motion.p
            variants={fadeIn}
            className={`${heroParagraph} xl:max-w-4xl xl:ml-6`}
          >
            Scroll down to see more.
          </motion.p>

          <motion.button
            variants={fadeUpBtn}
            className="flex justify-center hire-btn text-gray-300 mt-20 mx-auto md:mx-6 text-2xl xl:text-3xl font-semibold py-2 px-6 rounded-full cursor-pointer"
            onClick={() => {
              window.location.href = "mailto:haswanthtamilofficial@gmail.com"
            }}
          >
            Contact Me
          </motion.button>

          <motion.div
            variants={navAnimation}
            initial="hidden"
            animate={isNavOpen ? "visible" : "hidden"}
            className="nav-bar fixed top-[2.5%] right-0 h-[95%] w-60 bg-gray-900/70 text-white rounded-3xl z-40"
          >
            <NavBar scrollToIndex={scrollToIndex} />
          </motion.div>
          <motion.div className="fixed top-6 right-6 z-50">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="nav-btn flex flex-col justify-between w-10 h-8 px-2 py-2"
            >
              <span className="h-0.5 w-full bg-white"></span>
              <span className="h-0.5 w-full bg-white mt-0.5"></span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Hero
