import React from "react";
import { useInView } from "../Hooks/useInView";

const icons =
  "h-16 w-16 md:h-14 md:w-14 rounded-xl p-2 bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-md transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-white/20 hover:ring-white/40";

const techs = [
  { alt: "html", src: "/html-5.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { alt: "css", src: "/css.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { alt: "javascript", src: "/javascript.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { alt: "react", src: "/react.svg", link: "https://reactjs.org/" },
  { alt: "vite", src: "/vite.svg", link: "https://vitejs.dev/" },
  { alt: "tailwind", src: "/tailwind.svg", link: "https://tailwindcss.com/" },
  { alt: "node", src: "/node-js.svg", link: "https://nodejs.org/" },
  { alt: "express", src: "/Express.svg", link: "https://expressjs.com/" },
  { alt: "mongodb", src: "/MongoDB.svg", link: "https://www.mongodb.com/" },
  { alt: "mysql", src: "/sql.svg", link: "https://www.mysql.com/" },
  { alt: "git", src: "/git.svg", link: "https://git-scm.com/" },
  { alt: "github", src: "/github.svg", link: "https://github.com/" },
  { alt: "postman", src: "/Postman.svg", link: "https://www.postman.com/" }
];

function About({ id }) {
  const [headerRef, headerVisible] = useInView(0.3);
  const [leftRef, leftVisible] = useInView(0.3);
  const [rightRef, rightVisible] = useInView(0.3);

  return (
    <section
      id={id}
      className="relative px-8 py-24 lg:px-20 lg:py-32
      grid grid-cols-1 lg:grid-cols-2 gap-16
      bg-gradient-to-br from-[#1f5f5b] to-[#286f6b]
      overflow-hidden"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-white/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[450px] h-[450px] bg-[#e2eddf]/20 rounded-full blur-[130px]" />

      {/* HEADER */}
      <div
        ref={headerRef}
        className={`col-span-1 lg:col-span-2 flex justify-center transition-all duration-700
        ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h1 className="text-center text-4xl lg:text-[68px] font-bold text-[#e2eddf] tracking-wide">
          About Me
        </h1>
      </div>

      {/* LEFT CONTENT */}
      <div
        ref={leftRef}
        className={`relative z-10 flex flex-col gap-8 lg:gap-10
        items-center lg:items-start text-center lg:text-left
        transition-all duration-700 delay-150
        ${leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* ROLE */}
        <p className="text-[23px] md:text-[26px] font-semibold text-[#e2eddf]">
          Frontend / Full Stack Developer
        </p>


        {/* PARAGRAPH 1 */}
        <p className="text-[18px] md:text-[20px] text-[#e2eddf]/90 leading-[1.75] transition-opacity duration-700 delay-200">
          I am currently pursuing <span className="font-semibold">MCA</span> from{" "}
          <span className="font-semibold">Lovely Professional University</span>.
          I have hands-on experience working on{" "}
          <span className="font-medium">
            production-ready Single Page Applications
          </span>{" "}
          using modern frontend technologies.
        </p>

        {/* PARAGRAPH 2 */}
        <p className="text-[18px] md:text-[20px] text-[#e2eddf]/90 leading-[1.75] transition-opacity duration-700 delay-300">
          I specialize in building fast, scalable, and user-centric web
          applications with a strong focus on performance, clean architecture,
          and user experience. I enjoy transforming ideas into responsive,
          production-ready interfaces.
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-7 justify-center lg:justify-start mt-6">
          {techs.map((t) => (
            <a
              key={t.alt}
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              title={t.alt.toUpperCase()}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className={icons}
              />
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        ref={rightRef}
        className={`relative z-10 flex justify-center lg:justify-end items-center
        transition-all duration-700 delay-200
        ${rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="relative flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
          {/* IMAGE GLOW */}
          <div className="absolute -inset-12 rounded-full bg-white/30 blur-3xl"></div>

          {/* IMAGE */}
          <img
            src="/harshit.jpg"
            alt="Harshit Kumar"
            loading="lazy"
            className="
              relative
              w-80 h-80
              md:w-[26rem] md:h-[26rem]
              lg:w-[30rem] lg:h-[30rem]
              rounded-full
              object-cover object-top
              ring-4 ring-white/60
              shadow-[0_35px_80px_rgba(0,0,0,0.45)]
              transition-all duration-700 ease-out
              hover:scale-[1.05]
            "
          />
        </div>
      </div>
    </section>
  );
}

export default About;
