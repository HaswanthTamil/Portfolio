import { useEffect, useRef, useState, useCallback } from "react"
import ParticlesBG from "./components/ParticlesBG"
import "./index.css"
import "./styles/App.css"
import Hero from "./components/Hero"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

const App = () => {
  const sectionRefs = useRef([])
  const scrollContainerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Scroll to a section
  const scrollToIndex = useCallback((index) => {
    const section = sectionRefs.current[index]
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setCurrentIndex(index)
    }
  }, [])

  // Handle keyboard input
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "s") {
        e.preventDefault()
        if (currentIndex < sectionRefs.current.length - 1) {
          scrollToIndex(currentIndex + 1)
        }
      } else if (e.key === "ArrowUp" || e.key === "w") {
        e.preventDefault()
        if (currentIndex > 0) {
          scrollToIndex(currentIndex - 1)
        }
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [currentIndex, scrollToIndex])

  // Sync current section on manual scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current

    const handleScroll = () => {
      const scrollPos = scrollContainer.scrollTop
      const index = sectionRefs.current.findIndex((ref) => {
        return (
          ref && Math.abs(ref.offsetTop - scrollPos) < window.innerHeight / 2
        )
      })
      if (index !== -1 && index !== currentIndex) {
        setCurrentIndex(index)
      }
    }

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [currentIndex])

  return (
    <div className="min-h-screen bg-black relative z-0">
      <ParticlesBG className="absolute top-0 left-0 w-full h-full -z-10" />

      <main className="relative z-10 text-white text-5xl">
        <div
          ref={scrollContainerRef}
          className="h-screen w-full snap-y snap-mandatory overflow-scroll scroll-smooth"
          tabIndex={0}
        >
          <section
            ref={(el) => (sectionRefs.current[0] = el)}
            className="h-screen w-full snap-start"
          >
            <Hero scrollToIndex={scrollToIndex} />
          </section>
          <section
            ref={(el) => (sectionRefs.current[1] = el)}
            className="h-screen w-full snap-start"
          >
            <Projects />
          </section>
          <section
            ref={(el) => (sectionRefs.current[2] = el)}
            className="h-screen w-full snap-start"
          >
            <About />
          </section>
          <section
            ref={(el) => (sectionRefs.current[3] = el)}
            className="h-screen w-full snap-start"
          >
            <Contact />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
