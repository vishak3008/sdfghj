function SkillBadge({ name }) {
  return (
    <div
      className="
      px-5
      py-2
      rounded-full
      border
      border-slate-700
      bg-slate-800/60
      text-slate-200
      transition-all
      duration-300
      hover:border-sky-400
      hover:text-sky-300
      hover:-translate-y-1
      hover:shadow-lg
      hover:shadow-sky-500/20
      "
    >
      {name}
    </div>
  );
}

export default SkillBadge;