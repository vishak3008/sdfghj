import SectionTitle from "./common/SectionTitle";

function About() {
  return (
    <section id="about" className="py-32 px-8" style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  }}>
      <div className="max-w-7xl mx-auto">

        <SectionTitle>About Me</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-20 mt-16">

          {/* Left Side */}

          <div>

            <div className="mb-12">

              <h3 className="text-sky-400 text-4xl font-black mb-3">
                01
              </h3>

              <h4 className="text-white text-2xl font-semibold mb-4">
                Who I Am
              </h4>

              <p className="text-slate-400 leading-8 text-lg">
                I'm a B.Tech Information Technology student with a
                passion for software engineering, backend development,
                and cloud computing and game development. I enjoy building applications that
                solve practical problems while continuously learning new
                technologies.
              </p>

            </div>

            <div>

              <h3 className="text-sky-400 text-4xl font-black mb-3">
                02
              </h3>

              <h4 className="text-white text-2xl font-semibold mb-4">
                What I Build
              </h4>

              <p className="text-slate-400 leading-8 text-lg">
                My projects range from cloud-native web applications
                and REST APIs to Unity game development and digital
                hardware design using Verilog. I enjoy tackling
                challenges across different areas of software
                development.
              </p>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex items-center w-full">

  <div
    className="
      w-full
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/60
      p-10
      shadow-xl
      shadow-sky-500/10
    "
  >

    <h3 className="text-3xl font-bold text-white mb-8">
      Quick Facts
    </h3>

    <div className="space-y-6">

      <div className="flex justify-between border-b border-slate-800 pb-4">
        <span className="text-slate-400">Degree</span>
        <span className="text-white font-medium">B.Tech IT</span>
      </div>

      <div className="flex justify-between border-b border-slate-800 pb-4">
        <span className="text-slate-400">Specialization</span>
        <span className="text-white font-medium">
          Backend Development
        </span>
      </div>

      <div className="flex justify-between border-b border-slate-800 pb-4">
        <span className="text-slate-400">Interests</span>
        <span className="text-white font-medium">
          Cloud • APIs • Software Engineering
        </span>
      </div>

      <div className="flex justify-between border-b border-slate-800 pb-4">
        <span className="text-slate-400">Languages</span>
        <span className="text-white font-medium">
          Java • C • C++ • JavaScript • Python
        </span>
      </div>

      <div className="flex justify-between border-b border-slate-800 pb-4">
        <span className="text-slate-400">Database</span>
        <span className="text-white font-medium">
          MongoDB • SQL
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">Current Goal</span>
        <span className="text-sky-400 font-semibold">
          Software Engineering Internship
        </span>
      </div>

    </div>

  </div>

</div>

          </div>

        </div>

    </section>
  );
}

export default About;