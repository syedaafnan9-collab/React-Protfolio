import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-[#EAE0CF] border-[#4B5694]/40 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-[#EAE0CF]">SYEDA.A</h2>

            <p className="text-gray-400 mt-2">
              Frontend Developer | React.js Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-[#7288AE] hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="text-[#7288AE] hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:syedaafnan9@gmail.com"
              className="text-[#7288AE] hover:text-white transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-[#4B5694]/30 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2026 Syeda Afnan. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-4 md:mt-0 bg-[#4B5694] p-3 rounded-full hover:bg-[#7288AE] transition"
          >
            <FaArrowUp className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
