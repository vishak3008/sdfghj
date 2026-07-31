import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/60
      backdrop-blur-md
      p-8
      transition-all
      duration-300
      hover:-translate-y-3
      hover:border-sky-400
      hover:shadow-2xl
      hover:shadow-sky-500/20
      "
    >
      <h3 className="text-3xl font-bold text-white mb-5 group-hover:text-sky-400 transition">
        {title}
      </h3>

      <p className="text-slate-400 leading-8 mb-8">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 mb-8">

        {technologies.map((tech) => (

          <span
            key={tech}
            className="
            px-4
            py-2
            rounded-full
            bg-slate-800
            text-sky-300
            text-sm
            "
          >
            {tech}
          </span>

        ))}

      </div>


    </div>
  );
}

export default ProjectCard;