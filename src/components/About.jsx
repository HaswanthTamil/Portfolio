import React from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const skills = [
  "React",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Express",
  "Framer Motion",
  "Postman",
  "Vercel",
]

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col items-center justify-center px-8 py-20 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--mint)]">
        About Me
      </h2>

      <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
        Hey! I’m Haswanth — a frontend-focused dev who builds smooth, minimal,
        and bold digital experiences. I thrive on clean code, fast UIs, and a
        sprinkle of animation magic. Currently grinding hard, mastering
        fullstack vibes and dreaming up a future tech studio with a crew of
        builders, creatives, and dreamers.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-[var(--purp)] text-black font-semibold px-4 py-2 rounded-xl shadow-md transition-colors duration-300 ease-in-out hover:bg-[var(--mint)]"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default About
