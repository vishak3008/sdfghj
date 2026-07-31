import { FaEnvelope, FaGithub, FaLinkedin,FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SectionTitle from "./common/SectionTitle";
import Button from "./common/Button";

function Contact() {
  return (
    <section id="contact" className="py-32 px-8" style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  }}>
      <div className="max-w-4xl mx-auto text-center">

        <SectionTitle center>Contact</SectionTitle>

        <p className="text-slate-400 text-lg leading-8 max-w-2xl mx-auto mb-14">
          I'm currently looking for internship opportunities and
          always open to discussing new projects, collaborations,
          or software development opportunities.
        </p>

        <div className="space-y-6 mb-14">

          <a
            href="mailto:vishakharajan6252@gmail.com"
            className="
              flex
              items-center
              justify-center
              gap-4
              text-lg
              text-slate-300
              hover:text-sky-400
              transition
            "
          >
            <FaEnvelope className="text-sky-400 text-2xl" />
            vishakharajan6252@gmail.com
          </a>

          <a
            href="tel:+919952535911"
            className="
              flex
              items-center
              justify-center
              gap-4
              text-lg
              text-slate-300
              hover:text-sky-400
              transition
            "
          >
            <FaPhone className="text-sky-400 text-2xl" />
            +91 9952535911
          </a>

          <a
            href="https://www.linkedin.com/in/vishakharajan-c"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-4
              text-lg
              text-slate-300
              hover:text-sky-400
              transition
            "
          >
            <FaLinkedin className="text-sky-400 text-2xl" />
            LinkedIn
          </a>

          <a
            href="https://github.com/vishak3008"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-4
              text-lg
              text-slate-300
              hover:text-sky-400
              transition
            "
          >
            <FaGithub className="text-sky-400 text-2xl" />
            GitHub
          </a>

        <a
            href="https://leetcode.com/u/vishak_308/"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-4
              text-lg
              text-slate-300
              hover:text-sky-400
              transition
            "
        >
          <SiLeetcode className="text-sky-400 text-2xl" />
            LeetCode
         </a>
</div>

      </div>
    </section>
  );
}

export default Contact;