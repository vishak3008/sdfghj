import SectionTitle from "./common/SectionTitle";

function Academic() {
  const education = [
    {
      degree: "B.Tech, Information Technology",
      institute: "Vellore Institute of Technology - Vellore",
      result: "CGPA: 9.06 / 10",
      duration: "JULY 2024 - PRESENT",
    },
    {
      degree: "Class XII (ISC)",
      institute: "The Laidlaw Memorial School & Junior College",
      result: "88%",
      duration: "2024",
    },
    {
      degree: "Class X (ICSE)",
      institute: "The Laidlaw Memorial School & Junior College",
      result: "89%",
      duration: "2022",
    },
  ];

  return (
    <section id="academic" className="py-32 px-8" style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  }}>
      <div className="max-w-7xl mx-auto">

        {/* Small Label */}


        {/* Heading */}

        <SectionTitle>
          Academic Background
        </SectionTitle>

        <div className="mt-20">

          {education.map((item, index) => (

            <div key={index}>

              <div className="flex justify-between items-start py-10">

                {/* Left */}

                <div>

                  <h3 className="text-3xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-3 text-slate-400 text-xl">
                    {item.institute}
                  </p>

                </div>

                {/* Right */}

                <div className="text-right">

                  <h4 className="text-2xl font-bold text-white">
                    {item.result}
                  </h4>

                  <p className="mt-2 text-slate-500 uppercase tracking-[0.25em] text-sm">
                    {item.duration}
                  </p>

                </div>

              </div>

              {index !== education.length - 1 && (

                <div className="border-b border-slate-700"></div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Academic;