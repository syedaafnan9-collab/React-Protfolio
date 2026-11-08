import React from "react";

const Skill = () => {
  return (
    <>
      <section
        id="skills"
        className="min-h-screen bg-slate-950 text-[#EAE0CF] py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#7288AE] font-semibold">
              My Skills
            </p>

            <h2 className="text-5xl font-bold mt-3">
              Technologies I Work With
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
              I build responsive and user-friendly web applications using modern
              frontend technologies and development tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Tailwind CSS",
              "Bootstrap",
              "Git",
              "GitHub",
              "Vite",
              "Netlify",
              "REST API",
              "Responsive Design",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-[#0F172A] border border-[#4B5694]/40 rounded-xl p-6 text-center hover:-translate-y-2 hover:border-[#7288AE] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold">{skill}</h3>
              </div>
            ))}
          </div>

          {/* Learning */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-[#7288AE]">
              Currently Learning
            </h3>

            <p className="text-gray-400 mt-4">
              AI-Assisted Frontend Development • Axios • React Best Practices • MongoDB 
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
