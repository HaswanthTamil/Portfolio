import React, { useEffect } from "react"
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
  "mt-8 mx-6 text-xl md:text-2xl text-center md:text-left max-w-xl text-gray-300"

const Hero = () => {
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
          className="w-full relative"
        >
          <div className="w-full h-40 md:h-1 bg-transparent"></div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold text-center md:text-left text-white my-6 mx-6"
          >
            Haswanth Tamil
          </motion.h1>

          <motion.p
            variants={fadeLeft}
            style={{ color: "var(--mint)" }}
            className="text-3xl text-mint md:text-4xl font-semibold text-center md:text-left my-6 mx-6"
          >
            Frontend Developer
          </motion.p>

          <div className="h-5 md:h-1 bg-transparent"></div>

          <motion.p variants={fadeIn} className={heroParagraph}>
            I craft clean, animated websites that actually make people stop and
            stare.
          </motion.p>
          <motion.p variants={fadeIn} className={heroParagraph}>
            Scroll down to see more.
          </motion.p>

          <motion.button
            variants={fadeUpBtn}
            className="flex justify-center btn-to-project text-gray-300 mt-20 mx-auto md:mx-6 text-2xl font-semibold py-2 px-4 rounded-full cursor-pointer"
            onClick={() => {
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }}
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
          className="hidden md:flex absolute top-6 right-6 space-x-8 z-20 px-4 py-6"
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
