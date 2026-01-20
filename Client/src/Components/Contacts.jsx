import React, { useState } from "react";
import { useInView } from "../Hooks/useInView";
import { toast } from "react-toastify";
import { submitQuery } from "../API/Api";

const socialLinks = [
  {
    icon: "fa-brands fa-github",
    url: "https://github.com/harshit",
    color: "text-black",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    url: "https://www.linkedin.com/in/harshit-kumar-155469193",
    color: "text-blue-700",
  },
];

const Contacts = ({ id }) => {
  const [leftRef, leftVisible] = useInView(0.25);
  const [rightRef, rightVisible] = useInView(0.25);

  const [formError, setFormError] = useState("");

  // 🔧 FIX 1: countryCode added (no UI change)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    countryCode: "+91",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    try {
      // 🔧 FIX 2: submitQuery already returns data
      const res = await submitQuery(formData);

      if (res.success) {
        toast.success(res.message);
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
          countryCode: "+91",
        });
      } else {
        toast.error(res.message || "Failed to submit query");
        setFormError(res.message);
      }
    } catch (err) {
      toast.error(err?.message || "Something went wrong");
      setFormError("Please try again later.");
    }
  };

  return (
    <section
      id={id}
      className="w-full min-h-screen bg-[#e2eddf]
      flex flex-col lg:flex-row items-center justify-center
      px-6 py-20"
    >
      {/* LEFT INFO */}
      <div
        ref={leftRef}
        className={`w-full lg:w-1/2 max-w-xl
        flex flex-col items-center lg:items-start text-center lg:text-left
        transition-all duration-700
        ${leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-[#286f6b] mb-4">
          Let’s Connect
        </h2>

        <p className="text-lg text-[#286f6b]/80 mb-10 max-w-md">
          Have a project, opportunity, or question?  
          Feel free to reach out — I’d love to hear from you.
        </p>

        <div className="flex flex-col gap-5 w-full">
          {[
            { icon: "fa-location-dot", text: "Jalandhar, Punjab, India" },
            { icon: "fa-envelope", text: "kumarharshit370@gmail.com" },
            { icon: "fa-phone", text: "+91 78142 83095" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white/70
              rounded-xl px-6 py-4 shadow-md"
            >
              <i className={`fa-solid ${item.icon} text-xl text-[#286f6b]`} />
              <span className="text-lg text-[#286f6b]">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-6 mt-8">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 flex items-center justify-center
              rounded-full bg-white shadow-md
              hover:-translate-y-1 hover:shadow-xl
              ${link.color}`}
            >
              <i className={`${link.icon} text-2xl`} />
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT FORM */}
      <div
        ref={rightRef}
        className={`w-full lg:w-1/2 flex justify-center mt-16 lg:mt-0
        transition-all duration-700 delay-150
        ${rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <form
          onSubmit={onSubmit}
          className="bg-white rounded-2xl shadow-2xl
          p-10 w-full max-w-lg flex flex-col gap-6"
        >
          <h3 className="text-3xl font-bold text-[#286f6b] mb-2">
            Send a Message
          </h3>

          {["name", "email", "contact"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              className="w-full px-5 py-3 rounded-xl text-lg
              border border-[#286f6b]/50
              focus:outline-none focus:ring-2 focus:ring-[#286f6b]/40"
            />
          ))}

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="w-full px-5 py-3 rounded-xl text-lg
            border border-[#286f6b]/50
            focus:outline-none focus:ring-2 focus:ring-[#286f6b]/40"
          />

          <button
            type="submit"
            className="mt-4 bg-[#286f6b] text-white
            py-3 rounded-full font-semibold text-lg
            hover:bg-white hover:text-[#286f6b]"
          >
            Send Message
          </button>

          {formError && (
            <p className="text-center text-red-600 text-sm mt-2">
              {formError}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contacts;
