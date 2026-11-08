import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-[#EAE0CF] flex items-center py-20 border-y border-[#4B5694] "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#7288AE] uppercase tracking-[5px] font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-3">Know More About Me</h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Frontend Developer</h3>

            <p className="text-gray-300 leading-8 mb-5">
          
              
              Exploring Backend & AI Integration
            </p>

            <p className="text-gray-300 leading-8">
              I'm Syeda Afnan, a developer from Hyderabad interested in
              building modern, responsive, and user-friendly web applications. I
              work with HTML, CSS, JavaScript, React.js, and Tailwind CSS,
              and have hands-on experience building frontend projects and
              AI-powered applications using Gemini API. I'm also expanding
              my skills in backend development, learning **Node.js, Express.js,
              REST APIs, and MongoDB to understand how full-stack applications
              work, from designing user interfaces to handling server-side logic
              and data. I enjoy learning by building real-world projects,
              exploring new technologies, and continuously improving my
              development skills.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#111844] rounded-xl p-6 border border-[#4B5694] hover:-translate-y-2 transition duration-300">
              <h4 className="text-[#7288AE] text-lg font-semibold">
                📍 Location
              </h4>
              <p className="mt-3 text-gray-300">Hyderabad, India</p>
            </div>

            <div className="bg-[#111844] rounded-xl p-6 border border-[#4B5694] hover:-translate-y-2 transition duration-300">
              <h4 className="text-[#7288AE] text-lg font-semibold">
                🎓 Education
              </h4>
              <p className="mt-3 text-gray-300">
                B.Com (Computer Applications)
              </p>
            </div>

            <div className="bg-[#111844] rounded-xl p-6 border border-[#4B5694] hover:-translate-y-2 transition duration-300">
              <h4 className="text-[#7288AE] text-lg font-semibold">
                💻 Projects
              </h4>
              <p className="mt-3 text-gray-300">4+ Completed</p>
            </div>

            <div className="bg-[#111844] rounded-xl p-6 border border-[#4B5694] hover:-translate-y-2 transition duration-300">
              <h4 className="text-[#7288AE] text-lg font-semibold">🚀 Focus</h4>
              <p className="mt-3 text-gray-300">
                React.js & Frontend Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
