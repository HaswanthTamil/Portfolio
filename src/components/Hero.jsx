import React, { useEffect } from "react"
import { ArrowDown } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import {
  staggerContainer,
  fadeUp,
  fadeLeft,
  fadeIn,
  fadeInSocial,
  fadeUpBtn,
} from "../animations/animation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const heroParagraph =
  "mt-8 mx-6 text-xl lg:text-2xl xl:text-4xl text-center md:text-left max-w-xl text-gray-300"

const Hero = ({ scrollToIndex }) => {
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
            style={{ color: "var(--mint)" }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-mint font-semibold text-center md:text-left my-6 mx-6"
          >
            Frontend Developer
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
            className="flex justify-center btn-to-project text-gray-300 mt-20 mx-auto md:mx-6 text-2xl xl:text-3xl font-semibold py-2 px-6 rounded-full cursor-pointer"
            onClick={() => scrollToIndex(1)}
          >
            See My Work
          </motion.button>

          {/* mobile social icons */}
          <motion.div className="flex md:hidden justify-center space-x-8 z-20 px-4 my-20 mx-4">
            <motion.a
              variants={fadeIn}
              href="https://github.com/HaswanthTamil"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>

            <motion.a
              variants={fadeIn}
              href="mailto:haswanthtamilofficial@gmail.com"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* desktop social icons */}
        <motion.div
          className="hidden md:flex absolute top-6 right-6 space-x-8 z-20 px-4 py-6 xl:top-10 xl:right-10"
          initial="hidden"
          animate={socialControls}
          variants={fadeInSocial}
        >
          <motion.a
            variants={fadeInSocial}
            href="https://github.com/HaswanthTamil"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.a
            variants={fadeInSocial}
            href="mailto:haswanthtamilofficial@gmail.com"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </motion.a>
        </motion.div>
      </div>
    </>
  )
}

export default Hero
