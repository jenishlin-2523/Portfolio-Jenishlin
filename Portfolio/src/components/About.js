import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
     <div className="about-me-section">
  <p>
    Hi, I’m <strong>Jenishlin M</strong>, a passionate <strong>Full Stack Developer</strong> with expertise in <strong>React</strong>, <strong>Node.js</strong>, and modern <strong>web technologies</strong>. I love building <strong>interactive</strong> and <strong>efficient</strong> web applications that deliver a seamless user experience.
  </p>
  <p>
    I focus on developing scalable, maintainable, and robust applications, with strong fundamentals in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>REST APIs</strong>, and <strong>backend technologies</strong>. I enjoy writing clean code and optimizing applications for performance and accessibility.
  </p>
  <p>
    Apart from coding, I have a keen interest in <strong>learning new frameworks</strong>, exploring <strong>emerging technologies</strong>, and contributing to <strong>open-source projects</strong>. My goal is to continuously grow as a developer while delivering impactful solutions  that solve real-world problems.
  </p>
</div>


      <h1>What I'm Doing</h1>

      
        
        <div className="cards-container">
  <div className="card">
    <div className="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    </div>
    <h3>Web Development</h3>
    <p>
      Building responsive, fast, and accessible websites using modern web technologies.
    </p>
  </div>

  <div className="card">
    <div className="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    </div>
    <h3>React Web App Development</h3>
    <p>
      Building responsive, cross-platform web apps using React.
    </p>
  </div>

    <div className="card">
    <div className="icon-container">
      {/* Database Icon for API/Backend */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
        <path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3" />
      </svg>
    </div>
    <h3>API & Backend Integration</h3>
    <p>
      Designing and integrating RESTful APIs and backend services for robust, scalable applications.
    </p>
  </div>

  {/* 4th Card - Blender 3D & AR/VR */}
  <div className="card">
    <div className="icon-container">
      {/* Cube Icon for 3D */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cube">
        <path d="M21 16V8a2 2 0 0 0-1-1.73L12 2 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 22l8-4.27A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    </div>
    <h3>Blender 3D & AR/VR</h3>
    <p>
      Creating 3D models, animations, and immersive AR/VR experiences using Blender, Unity and modern frameworks.
    </p>
  </div>
</div>

      
    </div>
  );
}

export default About;