function SectionTitle({ children, center = false }) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {children}
      </h2>

      <div
        className={`mt-3 h-1 w-24 rounded-full bg-sky-500 ${
          center ? "mx-auto" : ""
        }`}
      ></div>
    </div>
  );
}

export default SectionTitle;