import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";
import Button from "./common/Button";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid Background */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(to right,#38bdf8 1px,transparent 1px),
          linear-gradient(to bottom,#38bdf8 1px,transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow */}

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[170px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[0.45em] text-sky-400 text-sm mb-7">
            HELLO, I'M
          </p>

          <h1
            className="text-6xl lg:text-7xl font-bold tracking-tight text-white"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Vishakharajan C
          </h1>

          <h2 className="mt-8 text-2xl text-slate-200 font-semibold">
            Backend Developer - Game developer - Cloud Enthusiast
          </h2>

          <p className="mt-4 text-sky-400 text-lg">
            Building scalable backend systems for the cloud.
          </p>

          <p className="mt-8 text-slate-400 text-lg leading-9 max-w-xl">
            Passionate about backend development, cloud computing,
            REST APIs, game development and creating software that solves real-world
            problems.
          </p>

          {/* Buttons */}

          <div className="flex gap-5 mt-12">

            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 transition flex items-center gap-3 font-semibold"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-slate-700 hover:border-sky-400 transition flex items-center gap-3"
            >
              <FaEnvelope />
              Contact
            </a>

          </div>

          {/* Social */}

          <div className="flex gap-7 mt-12 text-3xl">

            <a href="https://github.com/vishak3008" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-slate-500 hover:text-sky-400 transition" />
            </a>

            <a href="https://www.linkedin.com/in/vishakharajan-c" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-slate-500 hover:text-sky-400 transition" />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hidden lg:flex justify-center">

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 bg-sky-500 blur-[90px] opacity-20 rounded-3xl"></div>

            {/* Terminal */}

            <div
              className="
              relative
              w-[470px]
              rounded-3xl
              bg-slate-900/70
              border
              border-slate-700
              backdrop-blur-xl
              overflow-hidden
              shadow-2xl
              shadow-sky-500/10
              "
            >

              {/* Header */}

              <div className="flex items-center gap-2 px-6 py-4 border-b border-slate-700">

                <div className="w-3 h-3 rounded-full bg-red-500"></div>

                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                <span className="ml-4 text-slate-400 text-sm">
                  terminal
                </span>

              </div>

              {/* Body */}

              <div className="p-8 font-mono text-sm leading-8">

                <p className="text-sky-400">$ npm run dev</p>

                <p className="text-green-400">
                  ✓ Portfolio started successfully
                </p>

                <br />

                <p className="text-sky-400">$ whoami</p>

                <p className="text-green-400">
                  Vishakharajan Chandrasekaran
                </p>

                <br />


                <p className="text-sky-400">
                  $ status
                </p>

                <p className="text-green-400">
                  Open for Internship 🚀
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;