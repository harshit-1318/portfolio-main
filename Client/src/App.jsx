import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Services from "./Components/Services";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";

/* 🔹 PROJECTS / WORK (commented for now)
import React, { Suspense } from "react";
const Work = React.lazy(() => import("./Components/Work"));
*/

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />

      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Experience id="experience" />

      {/* 🔹 PROJECTS SECTION (commented)
      <Suspense
        fallback={
          <div className="w-screen h-screen flex items-center justify-center">
            <h1 className="text-3xl">Loading...</h1>
          </div>
        }
      >
        <Work id="work" />
      </Suspense>
      */}

      <Services id="services" />
      <Contacts id="contacts" />
      <Footer />
    </>
  );
}

export default App;
