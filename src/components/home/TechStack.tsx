import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSpring,
  SiPython,
  SiPostman,
  SiCplusplus,
  SiTypescript,
  SiDocker,
  SiGooglecloud,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiLinux,
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

          // BACKEND & SYSTEMS
          {
            name: "Node.js",
            icon: SiNodedotjs,
            color: "text-[#539E43]",
            animation: 1,
          },
          {
            name: "Python",
            icon: SiPython,
            color: "text-[#3776AB]",
            animation: 2,
          },
          {
            name: "Java",
            icon: FaJava,
            color: "text-[#007396]",
            animation: 3,
          },
          {
            name: "Spring Boot",
            icon: SiSpring,
            color: "text-[#6DB33F]",
            animation: 1,
          },
          {
            name: "C/C++",
            icon: SiCplusplus,
            color: "text-[#00599C]",
            animation: 2,
          },

          // CLOUD & INFRA
          {
            name: "Docker",
            icon: SiDocker,
            color: "text-[#2496ED]",
            animation: 3,
          },
          {
            name: "Google Cloud",
            icon: SiGooglecloud,
            color: "text-[#4285F4]",
            animation: 1,
          },
          {
            name: "Supabase",
            icon: SiSupabase,
            color: "text-[#3ECF8E]",
            animation: 2,
          },
          {
            name: "PostgreSQL",
            icon: SiPostgresql,
            color: "text-[#4169E1]",
            animation: 3,
          },

          // DEV TOOLS
          {
            name: "Git",
            icon: SiGit,
            color: "text-[#F05032]",
            animation: 1,
          },
          {
            name: "Linux",
            icon: SiLinux,
            color: "text-white",
            animation: 2,
          },
          {
            name: "Postman",
            icon: SiPostman,
            color: "text-[#FF6C37]",
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
