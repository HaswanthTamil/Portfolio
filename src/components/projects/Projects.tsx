import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "MRM Furnitures",
      description:
        "Landing page for furniture manufacturer, built and shipped under a week",
      href: "https://mrmfurnitures.com",
    },
    {
      title: "BytesBrush",
      description:
        "Official website for BytesBrush, a tech blog and community platform.",
      href: "https://bytesbrush.vercel.app/",
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
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group ${index % 2 === 0 ? "text-left" : "text-right"}`}
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
