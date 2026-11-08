import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="min-h-screen bg-slate-950 text-[#EAE0CF] py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-[#7288AE] font-semibold">
              Contact
            </p>

            <h2 className="text-5xl font-bold mt-3">Let's Work Together</h2>

            <p className="text-gray-400 mt-5">
              Have a project or internship opportunity? I'd love to hear from
              you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left */}

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <FaEnvelope className="text-3xl text-[#7288AE]" />

                <div>
                  <h3 className="font-semibold text-xl">Email</h3>
                  <p className="text-gray-400">syedaafnan9@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLocationDot className="text-3xl text-[#7288AE]" />

                <div>
                  <h3 className="font-semibold text-xl">Location</h3>
                  <p className="text-gray-400">Hyderabad, Telangana</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLinkedin className="text-3xl text-[#7288AE]" />

                <div>
                  <h3 className="font-semibold text-xl">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-[#7288AE]"
                  >
                    linkedin.com/in/your-linkedin
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaGithub className="text-3xl text-[#7288AE]" />

                <div>
                  <h3 className="font-semibold text-xl">GitHub</h3>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-[#7288AE]"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </div>
            </div>

            {/* Right */}

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#111844] border border-[#4B5694]/40 rounded-lg p-4 outline-none focus:border-[#7288AE]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#111844] border border-[#4B5694]/40 rounded-lg p-4 outline-none focus:border-[#7288AE]"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-[#111844] border border-[#4B5694]/40 rounded-lg p-4 outline-none focus:border-[#7288AE]"
              ></textarea>

              <button className="bg-[#4B5694] hover:bg-[#7288AE] transition px-8 py-3 rounded-lg font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
