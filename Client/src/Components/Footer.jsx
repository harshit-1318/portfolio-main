/* eslint-disable no-undef */
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#1f5f5b] to-[#286f6b] text-[#e2eddf] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">

        {/* NAME */}
        <h3 className="text-lg md:text-xl font-semibold tracking-wide">
          Harshit Kumar
        </h3>

        {/* TAGLINE */}
        <p className="text-sm md:text-base opacity-90">
          Frontend Web Developer • React Developer • Full Stack Developer
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/harshit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full
            bg-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <i className="fa-brands fa-github text-lg"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/harshit-kumar-155469193"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full
            bg-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <i className="fa-brands fa-linkedin-in text-lg"></i>
          </a>
        </div>

        {/* DIVIDER
        <div className="w-full max-w-sm h-px bg-white/20 my-4"></div> */}

        {/* COPYRIGHT */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Harshit Kumar. All rights reserved.
        </p>

        {/* CREDIT */}
        <p className="text-xs md:text-sm opacity-80">
          Designed, Developed & Maintained by{" "}
          <span className="font-semibold">Harshit Kumar</span>
        </p>

        {/* FLOATING BACK TO TOP */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
    fixed bottom-6 right-6 z-50
    w-12 h-12 rounded-full
    bg-[#286f6b] text-white
    flex items-center justify-center
    shadow-xl shadow-[#286f6b]/40
    transition-all duration-300
    hover:bg-white hover:text-[#286f6b]
    hover:-translate-y-1
  "
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>

      </div>
    </footer>
  );
};

export default Footer;
