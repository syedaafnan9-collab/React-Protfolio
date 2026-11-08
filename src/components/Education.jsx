
import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-slate-950 text-[#EAE0CF] py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-[#7288AE] font-semibold">
            Education
          </p>

          <h2 className="text-5xl font-bold mt-3">
            My Academic Journey
          </h2>

          <p className="text-gray-400 mt-5">
            My education and academic achievements.
          </p>
        </div>

        <div className="space-y-8">

          {/* MBA */}
          <div className="bg-[#0F172A] border border-[#4B5694]/40 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(114,136,174,0.25)] transition-all duration-300">

            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-3xl font-bold">
                  Master of Business Administration
                </h3>

                <h4 className="text-xl text-[#7288AE] mt-2">
                  MBA
                </h4>

                <p className="text-gray-400 mt-4">
                  Saanvi PG College for Women
                </p>

                <p className="text-gray-400 mt-1">
                  Almasguda, Hyderabad
                </p>
              </div>

              <div className="mt-6 md:mt-0">
                <span className="bg-[#4B5694] px-5 py-2 rounded-full">
                  2026 – Present
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-[#7288AE]">
                Entrance Examination
              </h4>

              <p className="text-gray-300 mt-3">
                TG ICET 2026
              </p>

              <p className="text-gray-400 mt-1">
                Rank: 23057
              </p>
            </div>
          </div>

          {/* B.Com */}
          <div className="bg-[#0F172A] border border-[#4B5694]/40 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(114,136,174,0.25)] transition-all duration-300">

            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-3xl font-bold">
                  Bachelor of Commerce
                </h3>

                <h4 className="text-xl text-[#7288AE] mt-2">
                  Computer Applications
                </h4>

                <p className="text-gray-400 mt-4">
                  Ideal Degree College for Women
                </p>

                <p className="text-gray-400 mt-1">
                  Osmania University
                </p>
              </div>

              <div className="mt-6 md:mt-0">
                <span className="bg-[#4B5694] px-5 py-2 rounded-full">
                  2023 – 2026
                </span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-5 text-[#7288AE]">
                Relevant Coursework
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React.js",
                  "Git & GitHub",
                  "Tailwind CSS",
                  "C++",
                  "DBMS",
                  "E-Commerce",
                  "Cyber Security"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#111844] px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
