import React from 'react';
import '../styles/Resume.css';
// Import icons from lucide-react
import { Briefcase, GraduationCap, Star } from 'lucide-react';

function Resume() {
  return (
    <>
      <header className="resume-header">
        <h1>Resume</h1>
      </header>
      <div className="resume-content">
        <section className="experience-section">
          <h2>
            <Briefcase size={24} color="#555" />
            Experience
          </h2>
          <div className="job-entry">
            <h3>Web Developer</h3>
            <p><strong>Freelance</strong> | Nov'2024 - Present</p>
            <p>Building responsive React apps with HTML/CSS, MongoDB (auth, database, hosting), and Node.js/Express REST APIs, optimizing performance.</p>
          </div>
          <div className="job-entry">
            <h3>Web Development Intern</h3>
            <p><strong>Zidio Development</strong> | May'2025 - June'2025</p>
            <p>Architected and developed a MERN-stack Excel Analytics Platform. Utilized React for the user interface, Node.js to build a robust back-end, and MongoDB for flexible data storage. Implemented key features such as data import, real-time analytics dashboards, and user authentication.</p>
          </div>
          <div className="job-entry">
            <h3>AR App Developer</h3>
            <p><strong>isxcce </strong> | Jul'2025 - Present</p>
            <p>Developed an AR application for kindergarten students using Unity Software to enhance learning. Applied these skills to create an interactive, real-world project that engaged young learners with augmented reality content.</p></div>
        </section>
        
        <div className="right-column-sections"> {/* This will be the main container for the right side */}
          <section className="education-section">
            <h2>
              <GraduationCap size={24} color="#555" />
              Education
            </h2>
            <div className="section-details-container"> {/* The container for the content */}
              <div className="education-entry">
                <h3>B.Tech in Artificial Intelligence and Data Science</h3>
                <p><strong>St. Xavier's Catholic College of Engineering, Nagercoil</strong></p>
                <p>2022 - 2026</p>
                <p>Pursuing a comprehensive curriculum focused on AI, machine learning, and data science. Gained hands-on experience in developing intelligent systems and data-driven applications. Senior project centered on real-world implementation of AI in interactive web platforms.</p>
              </div>
            </div>
          </section>

          <section className="skills-section">
            <h2>
              <Star size={24} color="#555" />
              Skills
            </h2>
            <div> {/* The container for the content */}
              <ul className="skills-list">
                <li><div className="skill-item">React</div></li>
                <li><div className="skill-item">JavaScript</div></li>
                <li><div className="skill-item">Node</div></li>
                <li><div className="skill-item">MongoDB</div></li>
                <li><div className="skill-item">Python</div></li>
                <li><div className="skill-item">HTML</div></li>
                <li><div className="skill-item">REST APIs</div></li>
                <li><div className="skill-item">Git</div></li>
                <li><div className="skill-item">Blender 3D</div></li>
                <li><div className="skill-item">Unity</div></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Resume;