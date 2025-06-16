import React from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { FaLinkedin, FaDiscord } from "react-icons/fa"
import { MdEmail, MdDownload } from "react-icons/md"
import { FaGithub } from "react-icons/fa"

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col items-center justify-center px-8 py-20 max-w-4xl mx-auto text-center space-y-8"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--mint)]">
        Get In Touch
      </h2>

      <p className="text-lg md:text-xl text-gray-300 max-w-md">
        Feel free to reach out! Whether it’s a collab, a question, or just to
        say hey.
      </p>

      <div className="flex space-x-8 text-[var(--purp)] text-4xl md:text-5xl">
        <a
          href="https://www.linkedin.com/in/haswanthtamil?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[var(--mint)] transition-colors duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:haswanthtamilofficial@gmail.com"
          aria-label="Email"
          className="hover:text-[var(--mint)] transition-colors duration-300"
        >
          <MdEmail />
        </a>

        <a
          href="https://github.com/HaswanthTamil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-[var(--mint)] transition-colors duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://discordapp.com/users/hasvvanth"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          className="hover:text-[var(--mint)] transition-colors duration-300"
        >
          <FaDiscord />
        </a>
      </div>

      <a
        href="/Haswanth_Resume.pdf"
        download="Haswanth-Resume.pdf"
        className="mt-6 inline-flex items-center space-x-2 bg-[var(--purp)] text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-[var(--mint)] transition-colors duration-300"
      >
        <MdDownload className="text-2xl" />
        <span>Download Resume</span>
      </a>
    </motion.div>
  )
}

export default Contact
