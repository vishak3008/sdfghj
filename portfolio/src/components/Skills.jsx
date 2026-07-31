import SectionTitle from "./common/SectionTitle";
import SkillBadge from "./common/SkillBadge";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C", "C++", "C#", "Python"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL"],
    },
    {
      title: "Cloud",
      skills: ["Cloud Architecture", "REST APIs"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-32 px-8" style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  }}>
      <div className="max-w-7xl mx-auto">

        <SectionTitle>Skills</SectionTitle>

        <p className="text-slate-400 text-lg max-w-3xl mb-16">
          Here are the technologies I've worked with while building
          web applications, cloud projects, and software systems.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skillCategories.map((category) => (

            <div
              key={category.title}
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
                hover:-translate-y-2
                hover:border-sky-400
                hover:shadow-2xl
                hover:shadow-sky-500/20
              "
            >

              <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-sky-400 transition">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">

                {category.skills.map((skill) => (

                  <SkillBadge
                    key={skill}
                    name={skill}
                  />

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;