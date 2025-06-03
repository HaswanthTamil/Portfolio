import { useRef, useCallback, useEffect } from "react"
import ParticlesBG from "./components/ParticlesBG"
import "./index.css"
import "./styles/App.css"
import Hero from "./components/Hero"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import NavBar from "./components/NavBar"

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    scrollToIndex(0)
  }, [])
  const sectionRefs = useRef([])

  const scrollToIndex = useCallback((index) => {
    const section = sectionRefs.current[index]
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <div className="min-h-screen bg-black relative z-0 text-white">
      <ParticlesBG className="absolute top-0 left-0 w-full h-full -z-10" />

      <main className="relative z-10">
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="min-h-screen w-full"
        >
          <Hero scrollToIndex={scrollToIndex} />
        </section>

        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="min-h-screen w-full"
        >
          <About />
        </section>

        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className="min-h-screen w-full"
        >
          <Projects />
        </section>

        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          className="min-h-screen w-full"
        >
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
