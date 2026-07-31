import SectionTitle from "./common/SectionTitle";
import ProjectCard from "./common/ProjectCard";

function Projects() {

  const projects = [


    {
      title: "BallKnowledge",

      description:
        "A football discussion platform where users can create posts, comment, like, dislike, and securely authenticate using JWT while interacting with a MongoDB backend.",

      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],

    },

    {
      title: " Once Upon an Astra - A Procedural Metroidvania",

      description:
        "A 2D Unity action game featuring handcrafted environments, procedural concepts, player combat, exploration mechanics, and custom animations (IN PROGRESS).",

      technologies: [
        "Unity",
        "C#",
        "Tilemaps",
        "Animation",
      ],

    },

    {
      title: "5-Stage RISC Pipeline",

      description:
        "Designed and implemented a five-stage pipelined RISC processor using Verilog to demonstrate pipelining, instruction execution, and processor architecture concepts.",

      technologies: [
        "Verilog",
        "Digital Logic",
        "Computer Architecture",
      ],

    },

  ];

  return (
    <section id="projects" className="py-32 px-8" style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  }}>
      <div className="max-w-7xl mx-auto">

        <SectionTitle>
          Featured Projects
        </SectionTitle>

        <p className="text-slate-400 text-lg max-w-3xl mb-16">
          A selection of projects showcasing my experience in backend
          development, game development, and computer
          architecture.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project) => (

            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;