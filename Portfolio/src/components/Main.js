import React from "react";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const MainContent = () => {
  return (
    <main className="main-content">
      <About />      {/* Make sure About component has id="about" */}
      <Resume />     {/* Resume component should have id="resume" */}
      <Portfolio />  {/* Portfolio component should have id="portfolio" */}
      <Contact />    {/* Contact component should have id="contact" */}
    </main>
  );
};

export default MainContent;
