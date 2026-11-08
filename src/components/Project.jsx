import React from "react";

const Project = () => {
  return (
    <>
      <section
        id="projects"
        className="min-h-screen bg-slate-950 text-[#EAE0CF] border-y border-[#4B5694] py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-[#7288AE] font-semibold">
              My Projects
            </p>

            <h2 className="text-5xl font-bold mt-3">Featured Projects</h2>

            <p className="text-gray-400 mt-5">
              Here are some of the projects I've built using React.js and
              JavaScript.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Project Card */}

            <div className="bg-[#111844] rounded-2xl overflow-hidden border border-[#4B5694]/40 hover:-translate-y-2 transition duration-300">
              <img
                src="ai-web.png"
                alt="AI-Chatbot"
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">AI-Chatbot</h3>

                <p className="text-gray-400 mt-3">
                 An interactive AI-powered chat interface with real-time messaging, 
                  customizable prompts, conversation history, and a robust backend integration.
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    React.js
                  </span>

                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    JavaScript
                  </span>

                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                   <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    Connected MongoDB
                  </span>
                   <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    Nodejs & Express
                  </span>
                   <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    API
                  </span>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://chatbotai-project.netlify.app"
                    className="bg-[#4B5694] px-5 py-2 rounded-lg hover:bg-[#7288AE] transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/syedaafnan9-collab/AI-Chatbot---Project"
                    className="border border-[#7288AE] px-5 py-2 rounded-lg hover:bg-[#7288AE] transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#111844] rounded-2xl overflow-hidden border border-[#4B5694]/40 hover:-translate-y-2 transition duration-300">
              <img
                src="AI-resume.png"
                alt="AI-Resume Analyzer"
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">AI-Resume Analyzer</h3>

                <p className="text-gray-400 mt-3">
                  A responsive shopping website with routing, add-to-cart
                  functionality, quantity controls, and checkout pages.
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    React.js
                  </span>

                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    JavaScript
                  </span>

                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                   <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    MongoDB
                  </span>
                   <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    Nodejs & Express
                  </span>
                   <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    API
                  </span>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://ai-resume-anal.netlify.app"
                    className="bg-[#4B5694] px-5 py-2 rounded-lg hover:bg-[#7288AE] transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/syedaafnan9-collab/AI-Resume-Analyzer"
                    className="border border-[#7288AE] px-5 py-2 rounded-lg hover:bg-[#7288AE] transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#111844] rounded-2xl overflow-hidden border border-[#4B5694]/40 hover:-translate-y-2 transition duration-300">
              <img
                src="authentication.png"
                alt="React-authentication"
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">React-authentication-Web</h3>

                <p className="text-gray-400 mt-3">
                  A responsive shopping website with routing, add-to-cart
                  functionality, quantity controls, and checkout pages.
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    React.js
                  </span>

                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    JavaScript
                  </span>

                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                   
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://react-authentication-ap.netlify.app"
                    className="bg-[#4B5694] px-5 py-2 rounded-lg hover:bg-[#7288AE] transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/syedaafnan9-collab/React-authentication-app"
                    className="border border-[#7288AE] px-5 py-2 rounded-lg hover:bg-[#7288AE] transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>






            <div className="bg-[#111844] rounded-2xl overflow-hidden border border-[#4B5694]/40 hover:-translate-y-2 transition duration-300">
              <img
                src="em.png"
                alt="Ecommerce Website"
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">E-Commerce Website</h3>

                <p className="text-gray-400 mt-3">
                  A responsive shopping website with routing, add-to-cart
                  functionality, quantity controls, and checkout pages.
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    React.js
                  </span>

                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    JavaScript
                  </span>

                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://e-commerce-aweb.netlify.app"
                    className="bg-[#4B5694] px-5 py-2 rounded-lg hover:bg-[#7288AE] transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/syedaafnan9-collab/E-commerce-web"
                    className="border border-[#7288AE] px-5 py-2 rounded-lg hover:bg-[#7288AE] transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#111844] rounded-2xl overflow-hidden border border-[#4B5694]/40 hover:-translate-y-2 transition duration-300">
              <img
                src="/td1.png"
                alt="Todo-list"
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">Todo-List</h3>

                <p className="text-gray-400 mt-3">
                  A responsive Todo List application built with React.js that
                  allows users to add, delete, and manage daily tasks with
                  localStorage support.
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    React.js
                  </span>

                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    JavaScript
                  </span>

                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://todo-list-afn.netlify.app/"
                    className="bg-[#4B5694] px-5 py-2 rounded-lg hover:bg-[#7288AE] transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/syedaafnan9-collab/TODO-LIST"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#7288AE] px-5 py-2 rounded-lg hover:bg-[#7288AE] transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#111844] rounded-2xl overflow-hidden border border-[#4B5694]/40 hover:-translate-y-2 transition duration-300">
              <img
                src="/cu.png"
                alt="Counter-app"
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">Digital-Counter</h3>

                <p className="text-gray-400 mt-3">
                  A responsive Digital Counter application built with HTML, CSS,
                  and JavaScript featuring increment, decrement, and reset
                  functionality with real-time updates.
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    HTMl
                  </span>

                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    CSS
                  </span>

                  <span className="bg-[#4B5694] px-3 py-1 rounded-full text-sm">
                    JavaScript
                  </span>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://digitalcounte.netlify.app"
                    className="bg-[#4B5694] px-5 py-2 rounded-lg hover:bg-[#7288AE] transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/syedaafnan9-collab/Digital-Counter"
                    className="border border-[#7288AE] px-5 py-2 rounded-lg hover:bg-[#7288AE] transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
