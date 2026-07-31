function Button({
  children,
  href = "#",
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 rounded-2xl font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-sky-500 text-white hover:bg-sky-400 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30",

    secondary:
      "border border-slate-600 text-white hover:border-sky-400 hover:text-sky-400 hover:scale-105",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}

export default Button;