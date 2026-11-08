import React from "react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className=" fixed top-0 left-0 w-full z-50 bg-slate-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-3xl font-extrabold tracking-widest text-[#FAF8FC]">
            SYEDA<span className="text-[#7288AE]">.</span>A
          </h1>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                Download CV
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft"
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only ">Open main menu</span>
              <svg
                className="w-6 h-6 text-[#FAF8FC]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-[#4B5694] border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <a
                  href="home.jsx"
                  className="block py-2 px-3 text-md text-[#F8FAFC] bg-brand rounded-sm md:bg-transparent  hover:text-[#4B5694]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-md text-[#F8FAFC] bg-brand rounded-sm md:bg-transparent  hover:text-[#4B5694]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 px-3 text-md text-[#F8FAFC] bg-brand rounded-sm md:bg-transparent   hover:text-[#4B5694]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3 text-md text-[#F8FAFC]  rounded-sm md:bg-transparent md:text-fg-brand  hover:text-[#4B5694]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="block py-2 px-3 text-md text-[#F8FAFC] bg-brand rounded-sm md:bg-transparent md:text-fg-brand   hover:text-[#4B5694]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Education
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  type="button"
                  className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                    <a href="#contact">Contact Me</a>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
          <div className="animate-navbar h-full w-[200%] bg-gradient-to-r from-transparent via-[#7288AE] to-transparent"></div>
        </div>
      </nav>
    </>
  );
};
