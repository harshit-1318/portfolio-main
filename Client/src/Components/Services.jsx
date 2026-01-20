import React from "react";
import { useInView } from "../Hooks/useInView";

/* ======================
   ICONS & BACKGROUNDS
====================== */

const serviceIcons = [
  "fa-solid fa-code",
  "fa-brands fa-react",
  "fa-solid fa-layer-group",
  "fa-solid fa-plug",
  "fa-solid fa-gauge-high",
  "fa-solid fa-briefcase"
];

const serviceBackgrounds = [
  "/webdevelopment.webp",
  "/react.webp",
  "/uiux.webp",
  "/api.webp",
  "/performance.webp",
  "/portfolio.webp"
];

/* ======================
   SERVICES
====================== */

const services = [
  {
    title: "Frontend Development",
    description:
      "Building fast, responsive, and scalable frontend applications using modern web technologies."
  },
  {
    title: "React SPA Development",
    description:
      "Developing high-performance Single Page Applications with React, Vite, and TypeScript."
  },
  {
    title: "UI / UX Implementation",
    description:
      "Transforming designs into clean, pixel-perfect, and user-friendly interfaces."
  },
  {
    title: "API Integration",
    description:
      "Integrating REST APIs and managing efficient data flow in frontend applications."
  },
  {
    title: "Performance Optimization",
    description:
      "Improving load times, rendering efficiency, and overall application performance."
  },
  {
    title: "Portfolio & Business Websites",
    description:
      "Designing and developing modern portfolios and professional business websites."
  }
];

/* ======================
   SERVICE CARD
====================== */

const ServiceCard = ({ service, icon, background }) => {
  const [ref, visible] = useInView(0.25);

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden
      transition-all duration-500
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/30" />

      {/* CONTENT */}
      <div
        className="
          relative z-10 h-72 p-8
          flex flex-col items-center justify-center text-center
          bg-black/10 backdrop-blur-[2px]
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#286f6b]/30
        "
      >
        {/* ICON */}
        <i
          className={`${icon} text-4xl mb-5 text-[#e2eddf]
          transition-transform duration-300
          group-hover:scale-110`}
        ></i>

        {/* TITLE */}
        <h3 className="text-xl font-semibold text-white mb-3">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-white/90 leading-relaxed max-w-[260px]">
          {service.description}
        </p>
      </div>
    </div>
  );
};

/* ======================
   MAIN COMPONENT
====================== */

const Services = ({ id }) => {
  const [headerRef, headerVisible] = useInView(0.3);

  return (
    <section
      id={id}
      className="w-full bg-[#f8f7f2] py-20 px-6 flex flex-col items-center"
    >
      {/* HEADER */}
      <div
        ref={headerRef}
        className={`mb-16 transition-all duration-700
        ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h1 className="text-center text-4xl lg:text-6xl font-bold text-[#286f6b]">
          Services
        </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            service={service}
            icon={serviceIcons[idx]}
            background={serviceBackgrounds[idx]}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
