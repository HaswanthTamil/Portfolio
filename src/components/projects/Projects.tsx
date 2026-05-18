import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Jarvis",
      description:
        "Execution-oriented AI runtime focused on orchestration, memory systems, tool execution, and automation workflows.",
      href: "https://jarvis.bytesbrush.in",
    },
    {
      title: "LineUp",
      description:
        "Campus queue and vendor management platform designed to streamline ordering and crowd flow inside educational institutions.",
      href: "/projects/lineup",
    },
    {
      title: "SideShelf",
      description:
        "System-wide Android overlay with clipboard history, pinned items, and planned Linux companion sync.",
      href: "/projects/sideshelf",
    },
    {
      title: "Drona Simulator Platform",
      description:
        "Leading frontend and systems architecture efforts for a large-scale web-based medical simulation platform.",
      href: "/projects/drona",
    },
    {
      title: "RajCloud",
      description:
        "Cloud-based institutional management platform focused on scalability, operational workflows, and multi-role administration.",
      href: "https://rajcloudtech.com",
    },
  ];

  return (
    <div className="w-full flex flex-col py-4 gap-6">
      <div>
        <h2 className="text-4xl text-white text-shadow font-bold mb-10 text-center">
          Projects
        </h2>
      </div>
      <div className="w-[60%] mx-auto flex flex-col gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.href ? project.href : ""}
            target="_blank"
            rel="noopener noreferrer"
            className={`group ${index % 2 === 0 ? "text-left hover:translate-x-4" : "text-right hover:-translate-x-4"} transition-transform duration-200 ease-out`}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p
              className={`md:flex md:w-[60%] text-gray-300 text-lg ${
                index % 2 === 0 ? "pl-2" : "ml-auto pr-2"
              }`}
            >
              {project.description}
            </p>
          </Link>
        ))}
      </div>
      <div>
        <p className="text-gray-300 text-center mt-10 font-poppins tracking-widest leading-relaxed">
          More projects coming soon!
          <br /> Stay tuned for updates.
        </p>
      </div>
    </div>
  );
};

export default Projects;
