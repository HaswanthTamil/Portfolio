import React from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
// eslint-disable-next-line no-unused-vars
import { link } from "framer-motion/client"

const projects = [
  {
    name: "Leddit",
    role: "Solo Project",
    subtitle: "Reddit-Lite Forum",
    desc: [
      "Designed a minimalist Reddit-style platform with a clean UI and focus on text-based posts.",
      "Built with Next.js, React, TailwindCSS, and Framer Motion for smooth UX and animations.",
      "Implemented level-1 comment threads, ditching nested replies for simplicity and speed.",
      "Integrated Clerk for auth and MongoDB for storing users, posts, and comments.",
      "Full-stack MVP shipped in 3 days—handled both frontend flow and backend API routes solo.",
    ],
    link: "https://leddit-nu.vercel.app/",
  },
  {
    name: "Collab-Board",
    role: "Collab Project",
    subtitle: "Team Productivity App",
    desc: [
      "Leading frontend development with React and TailwindCSS for a smooth, scalable UX.",
      "Working with a backend stack of MongoDB, Express, and Node.js.",
      "Managing team workflows, version control, and ensuring clean, maintainable code.",
      "Focused on building a tool that helps teams collaborate effortlessly.",
    ],
    link: "https://github.com/HaswanthTamil",
  },
  {
    name: "Shopstack",
    role: "Solo Project",
    subtitle: "E-Commerce Platform",
    desc: [
      "Built a fully responsive e-commerce site from scratch with Next.js, React, and TailwindCSS.",
      "Crafted UI components that adapt perfectly across devices, ensuring a smooth user experience.",
      "Switched backend calls for browser storage to speed things up and cut complexity.",
      "Handled everything solo: product listings, dynamic routing, cart features, and client-side state.",
      "Used GitHub for version control and Vercel for seamless deployment.",
    ],
    link: "https://shopstack-gray.vercel.app/",
  },
]

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="max-w-5xl mx-auto px-8 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-gradient bg-gradient-to-r from-[var(--purp)] to-[var(--mint)] text-center bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="flex flex-col gap-14">
        {projects.map(({ name, role, subtitle, desc, link }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="bg-[#111] p-8 rounded-2xl border border-[var(--purp)] shadow-md"
          >
            <a href={link}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-2xl font-semibold text-[var(--mint)]">
                  {name}
                </h3>
                <span className="text-[var(--purp)] font-medium mt-2 md:mt-0">
                  {role}
                </span>
              </div>
              <h4 className="text-lg text-gray-300 mb-4 italic">{subtitle}</h4>

              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
