import React from "react";
import { useInView } from "../Hooks/useInView";

const skills = [
  { name: "HTML", img: "/html-5.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", img: "/css.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript (ES6+)", img: "/javascript.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React.js", img: "/react.svg", link: "https://reactjs.org/" },
  { name: "TypeScript", img: "/typescript-svgrepo-com.svg", link: "https://www.typescriptlang.org/" },
  { name: "Tailwind CSS", img: "/tailwind.svg", link: "https://tailwindcss.com/" },
  { name: "Bootstrap", img: "/bootstrap.svg", link: "https://getbootstrap.com/" },
  { name: "Node.js", img: "/node-js.svg", link: "https://nodejs.org/" },
  { name: "Express.js", img: "/Express.svg", link: "https://expressjs.com/" },
  { name: "MongoDB", img: "/MongoDB.svg", link: "https://www.mongodb.com/" },
  { name: "MySQL", img: "/sql.svg", link: "https://www.mysql.com/" },
  { name: "Git", img: "/git.svg", link: "https://git-scm.com/" },
  { name: "GitHub", img: "/github.svg", link: "https://github.com/" },
  { name: "Postman", img: "/Postman.svg", link: "https://www.postman.com/" },
];

const Skills = ({ id }) => {
  const [sectionRef, sectionVisible] = useInView(0.25);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="
        relative
        px-8 py-24
        lg:px-20 lg:py-28
        bg-[#f7fbfa]
      "
    >
      {/* HEADER */}
      <div
        className={`flex justify-center mb-16 transition-all duration-700
        ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-[#286f6b]">
          Skills
        </h1>
      </div>

      {/* SKILLS GRID */}
      <div
        className={`grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-10
          transition-all duration-700 delay-150
          ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {skills.map(({ name, img, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex flex-col items-center justify-center
              p-6
              rounded-2xl
              bg-white
              shadow-md
              hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <img
              src={img}
              alt={name}
              loading="lazy"
              className="
                h-16 w-16
                mb-4
                transition-transform duration-300
                group-hover:scale-110
              "
            />
            <span className="text-sm font-semibold text-gray-600 group-hover:text-[#286f6b] text-center">
              {name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
