/* eslint-disable no-unused-vars */
import React, { useState, memo, Suspense } from "react";
import { ReactTyped } from "react-typed";
import { toast } from "react-toastify";
import "../index.css";

const Profile = React.lazy(() => import("./ProfileImg"));

function Home({ id }) {
  const [resumeDownload, setResumeDownload] = useState(false);

  const handleResumeDownload = () => {
    setResumeDownload(true);
    toast.success("Resume downloaded successfully!");
  };

  const iconStyle =
    "h-14 w-14 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-md text-[32px] text-[#286f6b]/80 transition-all duration-300 hover:text-[#286f6b] hover:scale-125 hover:shadow-xl";

  return (
    <section
      id={id}
      className="relative min-h-screen px-6 md:px-20 py-32 md:py-40
      flex flex-col md:flex-row items-center justify-between gap-24
      overflow-hidden bg-[gradient]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-52 -left-52 w-[500px] h-[500px] bg-[#286f6b]/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-52 -right-52 w-[500px] h-[500px] bg-[#4fa39d]/30 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">

        {/* INTRO */}
        <p className="uppercase tracking-[3px] text-sm font-semibold text-[#286f6b]/80">
          Welcome to my portfolio
        </p>

        {/* HELLO */}
        <p className="mt-3 text-lg md:text-xl text-gray-700">
          Hello, I’m
        </p>

        {/* NAME */}
        <h1 className="mt-2 text-4xl md:text-5xl lg:text-[72px] font-semibold leading-tight">
          <span className="italic bg-gradient-to-r from-[#286f6b] to-[#4fa39d] bg-clip-text text-transparent relative">
            Harshit Kumar
            <span className="absolute left-0 -bottom-2 w-full h-[6px] rounded-full bg-gradient-to-r from-[#286f6b] to-[#4fa39d] blur-sm opacity-60" />
          </span>
        </h1>

        {/* ROLE */}
        <h2 className="mt-7 text-xl md:text-2xl lg:text-[30px] text-gray-700 animate-fadeIn">
          I am a{" "}
          <ReactTyped
            strings={[
              "Frontend Web Developer",
              "React Developer",
              "Full Stack Developer",
            ]}
            typeSpeed={70}
            backSpeed={40}
            loop
            cursorChar="|"
            className="font-semibold text-[#286f6b]"
          />
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-10 text-[19px] md:text-[20px] leading-[1.8] text-gray-600">
          I build modern, responsive, and high-performance web applications.
          Specialized in{" "}
          <span className="font-semibold text-[#286f6b]">
            React, TypeScript, Tailwind CSS
          </span>{" "}
          with a strong focus on clean UI, scalability, and smooth user experience.
        </p>

        {/* SOCIAL ICONS */}
        <div className="mt-14 flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className={iconStyle}
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className={iconStyle}
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>

        {/* BUTTONS */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6">
          <a
            href="#projects"
            className="px-9 py-4 rounded-full font-semibold text-white
            bg-gradient-to-r from-[#286f6b] to-[#4fa39d]
            transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#286f6b]/40
            flex items-center gap-3"
          >
            View My Work
            <i className="fa-solid fa-arrow-right"></i>
          </a>

          <a
  href="/HARSHIT_RESUME%20(1).pdf"
  download="Harshit_Kumar_Resume.pdf"
  onClick={handleResumeDownload}
  className="px-9 py-4 rounded-full font-semibold
  text-[#286f6b] outline outline-1 outline-[#286f6b]
  transition-all duration-300 hover:bg-[#286f6b] hover:text-white hover:scale-105 hover:shadow-xl
  flex items-center gap-3"
>
  Download Resume
  <i className="fa-solid fa-download"></i>
</a>


        </div>
      </div>

      {/* RIGHT CONTENT – PROFILE */}
      <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
        <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-xl shadow-2xl
        ring-2 ring-[#286f6b]/30 hover:ring-[#286f6b]/60 transition-all duration-500">
          <Suspense
            fallback={
              <div className="w-36 h-36 border-4 border-dashed border-[#286f6b] rounded-full animate-spin" />
            }
          >
            <Profile />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default memo(Home);
