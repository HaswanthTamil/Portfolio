import { useState } from "react"
import "./styles/App.css"
import ParticlesBG from "./components/ParticlesBG"

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <ParticlesBG />
    </div>
  )
}

export default App
