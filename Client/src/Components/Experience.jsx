import React, { useState } from "react";
import { useInView } from "../Hooks/useInView";

/* ======================
   DATA
====================== */

const experienceData = [
  {
    title: "Frontend Developer Trainee",
    company: "CSharma Consultancy (On-site)",
    description:
      "Developed and maintained production-ready Single Page Applications using React, TypeScript, and Vite. Built reusable UI components, implemented client-side routing with React Router, integrated Shopify REST APIs, and collaborated with NestJS backend services. Assisted in deployment and resolved performance and build issues.",
    year: "Sep 2025 – Dec 2025",
    certificate: ""
  }
];

const educationData = [
  {
    title: "Master of Computer Applications (MCA)",
    description: "Lovely Professional University",
    year: "2025 – 2027"
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    description: "DAV College, Jalandhar",
    year: "2022 – 2025"
  }
];

/* ======================
   TIMELINE ITEM
====================== */

const TimelineItem = ({ item, index, total, align = "left" }) => {
  const [ref, visible] = useInView(0.25);
  const topPercent = ((index + 1) / (total + 1)) * 100;

  return (
    <div
      ref={ref}
      className={`lg:absolute w-full transition-all duration-700
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ top: `calc(${topPercent}% - 60px)` }}
    >
      {/* DOT */}
      <div className="absolute left-4 lg:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
        <span className="block w-5 h-5 rounded-full bg-[#286f6b] ring-4 ring-[#286f6b]/30 shadow-lg"></span>
      </div>

      {/* CARD */}
      <div
        className={`flex ${
          align === "right"
            ? "lg:justify-end lg:pr-10"
            : "lg:justify-start lg:pl-10"
        } ml-10 lg:ml-0`}
      >
        <div
          className="
          bg-white rounded-xl p-6 w-full lg:w-[560px]
          shadow-md hover:shadow-xl
          transition-all duration-300 hover:-translate-y-1
        "
        >
          <h3 className="text-lg font-bold text-[#286f6b]">
            {item.title}
          </h3>

          {item.company && (
            <p className="text-sm font-medium text-gray-500 mt-1">
              {item.company}
            </p>
          )}

          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            {item.description}
          </p>

          <span className="block text-xs text-gray-400 mt-3">
            {item.year}
          </span>

          {item.certificate && (
            <a
              href={item.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs text-[#286f6b] underline"
            >
              View Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* ======================
   MAIN COMPONENT
====================== */

function Experience({ id }) {
  const [activeTab, setActiveTab] = useState("experience");
  const [tabRef, tabVisible] = useInView(0.3);

  return (
    <section
      id={id}
      className="bg-[#f8f7f2] py-20 px-6 lg:px-20 flex flex-col items-center"
    >
      {/* TABS */}
      <div
        ref={tabRef}
        className={`flex gap-4 mb-14 transition-all duration-700
        ${tabVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {["experience", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-7 py-2 rounded-full font-semibold transition-all duration-200
            ${
              activeTab === tab
                ? "bg-[#286f6b] text-white shadow-md"
                : "bg-white text-[#286f6b] border border-[#286f6b]"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* TIMELINE */}
      <div className="relative w-full max-w-7xl lg:h-[70vh]">
        {/* VERTICAL LINE */}
        <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 h-full w-[3px] bg-[#286f6b]/70 rounded-full" />

        {(activeTab === "experience"
          ? experienceData
          : educationData
        ).map((item, idx, arr) => (
          <TimelineItem
            key={idx}
            item={item}
            index={idx}
            total={arr.length}
            align={activeTab === "education" ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
