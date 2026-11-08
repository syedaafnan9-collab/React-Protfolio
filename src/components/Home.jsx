import React from "react";

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen bg-slate-950 text-[#EAE0CF] flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-[#7288AE] text-lg mb-3">👋 Hello, I'm</p>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">Syeda Afnan</h1>

            <h2 className="text-2xl text-[#7288AE] font-semibold mb-6">
              Frontend Developer
            </h2>

            <p className="text-lg leading-8 max-w-xl">
              I build responsive and modern web applications using React.js,
              JavaScript and Tailwind CSS. Learned nd Created Backend Projects using  Basics Express MongoDB .  Passionate about creating beautiful
              user interfaces and solving real-world problems.
            </p>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <button className="bg-[#4B5694] px-6 py-3 rounded-lg hover:bg-[#7288AE] transition">
                Hire Me
              </button>
              <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                  View Projects
                </span>
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center">
            <img
              src="img.jpg"
              alt="Syeda Afnan"
              className="w-72 h-72 rounded-full object-cover border-4 border-[#7288AE]"
            />
          </div>
        </div>
      </section>
    </>
  );
};
