function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      <nav
        className="
          flex
          items-center
          gap-10
          px-8
          py-4
          rounded-full
          border
          border-slate-800
          bg-slate-950/70
          backdrop-blur-xl
          shadow-lg
          shadow-black/20
        "
      >
        {/* Logo */}

        <a
          href="#home"
          className="text-xl font-bold text-sky-400 hover:text-sky-300 transition-colors duration-300"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Vishakharajan C
        </a>

        {/* Links */}

        <div className="flex items-center gap-8 text-slate-400">

          <a href="#home" className="hover:text-sky-400 transition">
            Home
          </a>


          <a href="#about" className="hover:text-sky-400 transition">
            About
          </a>

          <a href="#academic" className="hover:text-sky-400 transition">
            Academic
          </a>

          <a href="#skills" className="hover:text-sky-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-sky-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-sky-400 transition">
            Contact
          </a>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;