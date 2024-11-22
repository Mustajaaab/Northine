import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

function App() {
  const sectionRefs = useRef([]); // Store refs for multiple sections
  const sections = [
    { id: 1, bg: "bg-gray-200", title: "Section 1", path: "../../" },
    { id: 2, bg: "bg-gray-100", title: "Section 2", path: "/section2" },
    { id: 3, bg: "bg-gray-300", title: "Section 3", path: "/section3" },
  ]; // Section data

  return (
    <Router>
      <NavbarWithRoutes sections={sections} />
      <Routes>
        {sections.map((section) => (
          <Route
            key={section.id}
            path={section.path}
            element={<SectionContent sections={sections} sectionRefs={sectionRefs} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

function NavbarWithRoutes({ sections }) {
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Update active section based on URL path
    const currentPath = location.pathname;
    const matchingSection = sections.find((section) => section.path === currentPath);
    setActiveSection(matchingSection?.id);
  }, [location.pathname, sections]);

  return (
    <div
      className={`fixed w-[100%] flex justify-evenly items-center h-[80px] z-50 transition-all duration-300 ${
        activeSection === 2 ? "bg-white text-black" : "bg-[#121820] text-white"
      }`}
    >
      <img src="/path-to-logo" alt="" className="w-[186px] h-[50px]" />
      <div className="flex items-center gap-4">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.path}
            className="px-4 py-2 font-semibold font-syne hover:text-[#F57C00] ease-in-out duration-300"
          >
            {section.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SectionContent({ sections, sectionRefs }) {
  useEffect(() => {
    const currentSection = sections.find(
      (section) => section.path === window.location.pathname
    );

    // Scroll to section on page load
    if (currentSection && sectionRefs.current[currentSection.id - 1]) {
      sectionRefs.current[currentSection.id - 1].scrollIntoView({ behavior: "smooth" });
    }
  }, [sections, sectionRefs]);

  return (
    <div>
      {sections.map((section, index) => (
        <div
          key={section.id}
          data-id={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`h-[100vh] ${section.bg} flex items-center justify-center`}
        >
          <h1 className="text-center text-[32px] font-bold">{section.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
