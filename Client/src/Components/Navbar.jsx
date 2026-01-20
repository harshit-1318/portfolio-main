/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const navOptions = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contacts", href: "#contacts" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "bg-white/80 backdrop-blur-xl shadow-lg"
        : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center h-18 px-6 md:px-20">

        {/* LOGO */}
        <span
          className="font-['Playfair Display'] text-3xl lg:text-4xl
          uppercase tracking-[0.18em]
          bg-gradient-to-r from-[#1f5f5b] to-[#4fa39d]
          bg-clip-text text-transparent cursor-pointer"
        >
          Harshit
        </span>

        {/* DESKTOP MENU */}
        <ul className="hidden sm:flex items-center gap-3 text-[17px] lg:text-[18px] font-medium">
          {navOptions.map(option => (
            <li key={option.label}>
              <a
                href={option.href}
                className={`px-6 py-2.5 rounded-full transition-all duration-300
                ${
                  active === option.label
                    ? "bg-[#286f6b] text-white shadow-md scale-105"
                    : "text-gray-700 hover:bg-[#286f6b]/10 hover:text-[#286f6b]"
                }`}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden focus:outline-none"
        >
          <div className="space-y-1.5">
            <span className={`block w-7 h-[3px] bg-[#286f6b] transition ${menuOpen && "rotate-45 translate-y-2"}`} />
            <span className={`block w-7 h-[3px] bg-[#286f6b] transition ${menuOpen && "opacity-0"}`} />
            <span className={`block w-7 h-[3px] bg-[#286f6b] transition ${menuOpen && "-rotate-45 -translate-y-2"}`} />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center gap-5 py-7 bg-white/90 backdrop-blur-xl">
          {navOptions.map(option => (
            <li key={option.label}>
              <a
                href={option.href}
                onClick={() => setMenuOpen(false)}
                className={`px-7 py-3 text-[17px] rounded-full transition-all duration-300
                ${
                  active === option.label
                    ? "bg-[#286f6b] text-white shadow-md"
                    : "text-gray-700 hover:bg-[#286f6b]/10 hover:text-[#286f6b]"
                }`}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
