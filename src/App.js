import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

// The new component for your loading screen
const LoadingScreen = () => (
  <div className="loading-container">
    <div className="avatar-container">
      {/* Replace with your actual avatar image */}
      <img src="/img/d.png" alt="Jenishlin" className="avatar" />
    </div>
    <div className="loading-text">Jenishlin | Portfolio</div>
    <div className="loading-bar-container">
      <div className="loading-bar"></div>
    </div>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isLoading, setIsLoading] = useState(true); // New state for loading

  // useEffect to handle the loading timeout
  useEffect(() => {
    // Set a timeout to simulate a loading period
    const timer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after 3 seconds
    }, 2300); // 3000 milliseconds = 3 seconds

    // Cleanup the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this runs only once

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app-container">
      <div className="content-area">
        <Sidebar />
        <div className="right-side">
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <main className="main-content">
            {activeSection === "about" && <About />}
            {activeSection === "resume" && <Resume />}
            {activeSection === "portfolio" && <Portfolio />}
            {activeSection === "contact" && <Contact />}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;