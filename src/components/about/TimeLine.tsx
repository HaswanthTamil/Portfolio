// components/TimeLine.jsx
"use client"
import { motion } from "framer-motion"

const timeline = [
  { date: "April 2025", label: "Picked up basic CS: Python, JS, OOPs" },
  {
    date: "May 2025",
    label: "Dived into frontend (React/NextJS + Tailwind).",
  },
  {
    date: "June 2025",
    label:
      "Started learning Django.",
  },
  { date: "June 2025", label: "Took on an unpaid frontend project." },
  { date: "July 2025", label: "Landed my first paying client." },
  { date: "August 2025", label: "Started learning backend (Spring Boot, NodeJS)." },
  { date: "November 2025", label: "Leading the development of accessbility enhancement tool."}
]

export default function TimeLine() {
  return (
    <div className="w-full px-4 md:px-10 mt-20 pt-20 md:pt-0 md:mt-0 xl:mx-auto">
      {/* About Me */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-4xl text-white text-shadow font-bold mb-4">
          About Me
        </h2>
        <br/>
        <p className="text-lg text-gray-50 text-shadow">
          Hi! I&#39;m <span className="font-semibold text-white">Haswanth</span>{" "}
          — a frontend-focused fullstack dev who loves turning ideas into sleek,
          functional apps.
          <br />
          <br />
          Founder of{" "}
          <span className="font-semibold text-white">BytesBrush</span>,
          part-time freelancer and a student.
          <br />I don&#39;t just build UIs — I craft experiences that click.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto border-l-2 border-gray-500 pl-6">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-10 relative"
          >
            <div className="absolute -left-[15px] top-2 w-2.5 h-2.5 bg-white opacity-40 rounded-full border border-gray-600" />
            <h4 className="text-white px-1 mx-2 font-semibold text-md">
              {item.date}
            </h4>
            <p className="text-gray-200 px-1 mx-2 text-base">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
