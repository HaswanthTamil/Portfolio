import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiFigma,
  SiNodedotjs,
  SiSpring,
  SiPython,
  SiPostman,
  SiVercel,
  SiThreedotjs,
  SiCplusplus,
  SiTypescript,
  SiKotlin,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

const TechStack = () => {
  return (
    <>
      <div className="grid grid-cols-3 pt-4 lg:pt-0 gap-y-8 gap-x-2 my-auto">
        {[
          // FRONTEND
          {
            name: "React",
            icon: SiReact,
            color: "text-[#61DAFB]",
            animation: 1,
          },
          {
            name: "Next.js",
            icon: SiNextdotjs,
            color: "text-black dark:text-white",
            animation: 2,
          },
          {
            name: "TypeScript",
            icon: SiTypescript,
            color: "text-[#3178C6]",
            animation: 3,
          },

          // STYLING & DESIGN
          {
            name: "Tailwind CSS",
            icon: SiTailwindcss,
            color: "text-[#38BDF8]",
            animation: 1,
          },
          {
            name: "Framer Motion",
            icon: SiFramer,
            color: "text-[#EC4899]",
            animation: 2,
          },
          {
            name: "Figma",
            icon: SiFigma,
            color: "text-[#F24E1E]",
            animation: 3,
          },

          // BACKEND & RUNTIME
          {
            name: "Node.js",
            icon: SiNodedotjs,
            color: "text-[#539E43]",
            animation: 1,
          },
          {
            name: "Spring Boot",
            icon: SiSpring,
            color: "text-[#6DB33F]",
            animation: 2,
          },
          {
            name: "Python",
            icon: SiPython,
            color: "text-[#3776AB]",
            animation: 3,
          },

          // TOOLS & DEVOPS
          {
            name: "Postman",
            icon: SiPostman,
            color: "text-[#FF6C37]",
            animation: 1,
          },
          {
            name: "Vercel",
            icon: SiVercel,
            color: "text-black dark:text-white",
            animation: 2,
          },

          // CREATIVE & 3D
          {
            name: "Three.js",
            icon: SiThreedotjs,
            color: "text-white",
            animation: 3,
          },
          {
            name: "C/C++",
            icon: SiCplusplus,
            color: "text-[#00599C]",
            animation: 1,
          },
          {
            name: "Java",
            icon: FaJava,
            color: "text-[#007396]",
            animation: 2,
          },
          {
            name: "Kotlin",
            icon: SiKotlin,
            color: "text-[#7F52FF]",
            animation: 3,
          },
        ].map(({ name, icon: Icon, color, animation }) => (
          <div
            key={name}
            className={`flex items-center gap-2 xl:gap-4 text-white/90 hover:scale-105 transition duration-150 ease-out cursor-default ${
              animation === 1
                ? "animate-scalePulse1"
                : animation === 2
                ? "animate-scalePulse2"
                : animation === 3
                ? "animate-scalePulse3"
                : "animate-scalePulse4"
            }`}
          >
            <Icon
              className={`text-xl xl:text-4xl ${color} ${
                (name === "React" || name === "Three.js") && "animate-spin"
              }`}
            />
            <span className={`text-sm xl:text-2xl font-medium font-lexend`}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

export default TechStack
