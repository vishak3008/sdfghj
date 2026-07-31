function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-400 text-sm tracking-wide">
            © {new Date().getFullYear()} <span className="text-white font-medium">Vishakharajan C</span>. 
          </p>

          <p className="text-slate-500 text-sm">
            Built with <span className="text-sky-400">React</span> +{" "}
            <span className="text-sky-400">Vite</span> +{" "}
            <span className="text-sky-400">Tailwind CSS</span>
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;