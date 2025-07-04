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
  {
    name: "Globe",
    role: "Solo Project",
    subtitle: "3D Globe using Three.js",
    desc: [
      "Built an interactive 3D globe visualization using Three.js, rendered smoothly in the browser.",
      "Implemented camera controls, lighting, and realistic Earth textures for an immersive feel.",
      "Optimized performance for smooth interaction across devices, even on low-end hardware.",
      "Handled all aspects solo: scene setup, animations, interaction logic, and deployment.",
      "Used GitHub for version control and Vercel for fast and easy deployment.",
    ],
    link: "https://globe-woad.vercel.app/",
  },
  {
    name: "Wormhole",
    role: "Solo Project",
    subtitle: "Wormhole simulation using Three.js",
    desc: [
      "Created a real-time 3D wormhole simulation using Three.js and custom shaders for a trippy space effect.",
      "Engineered dynamic camera movements and depth visuals to mimic spatial distortion.",
      "Used post-processing effects like fog and motion blur to enhance immersion.",
      "Handled everything solo: geometry generation, animation logic, shader tweaking, and scene composition.",
      "Version control via GitHub and deployed seamlessly to Vercel for live access.",
    ],
    link: "https://wormhole-ten.vercel.app/",
  },
  {
    name: "Weather API",
    role: "Solo Project",
    subtitle: "Real time weather updates",
    desc: [
      "Built a sleek web app that fetches real-time weather data using the WeatherAPI.",
      "Integrated dynamic location-based search with auto-suggestions for a smooth UX.",
      "Displayed temperature, humidity, wind speed, and condition icons with clean UI components.",
      "Handled API integration, error handling, and state management from scratch.",
      "Version controlled via GitHub and deployed live using Vercel for instant access.",
    ],
    link: "https://weather-opal-seven.vercel.app/",
  },
]

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 py-20">
      <h2 className="text-4xl font-bold mb-12 text-gradient bg-gradient-to-r from-[var(--purp)] to-[var(--mint)] text-center bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="flex flex-col gap-14">
        {projects.map(({ name, role, subtitle, desc, link }, idx) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
