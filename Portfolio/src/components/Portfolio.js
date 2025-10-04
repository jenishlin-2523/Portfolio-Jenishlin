import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";
import ProjectModal from "../components/ProjectModal.js";

const projectsData = [
  {
    id: 1,
    year: 2024,
    title: "SnapName",
    subtitle: "Android Studio",
    description:
      "A mobile app to rename and search images efficiently. — all in one simple, real-time app.",
    technologies: ["Android Studio", "Kotlin", "Xml"],
    type: "Mobile App",
    url: "https://snapname.netlify.app/",
    image: "/pic/1.png",
  },
  {
    id: 2,
    year: 2025,
    title: "LetzPray",
    subtitle: "Web",
    description:
      "LetzPray is a digital prayer platform built with React, CSS, and JavaScript, designed to connect people through reminders, community, and shared intentions.",
    technologies: ["React", "CSS", "JavaScript"],
    type: "Web",
    url:"https://lets-pray-three.vercel.app/",
    image: "/pic/12.png",
  },
  {
    id: 3,
    year: 2025,
    title: "Excel Analytics Platform",
    subtitle: "Web",
    description:
      "A MERN platform with separate admin and user pages to analyze Excel files. Users can upload and explore data, AI chart suggestions, and export options, while admins manage users and monitor system performance.",
    technologies: ["React", "Node", "MongoDB", "Express.js", "CSS", "JavaScript"],
    type: "Web",
    url:"https://excel-analytic-platform.netlify.app/",
    image: "/pic/16.png",
  },
  {
    id: 4,
    year: 2025,
    title: "Bank Management Dashboard",
    subtitle: "Web",
    description:
      "A Bank Management Dashboard recreated from a Figma design template, built using React.js for efficient administration and a seamless user experience.",
    technologies: ["React", "CSS", "JavaScript"],
    type: "Web",
    url:"https://bank-dash-psi.vercel.app/",
    image: "/pic/9.png",
  },
  {
    id: 5,
    year: 2025,
    title: "Kick Store",
    subtitle: "Website",
    description:
      "An E-commerce webpage impressed by the template of figma and recreated by using HTML ,CSS and Javascript",
    technologies: ["Html", "CSS", "JavaScript"],
    type: "Web",
    url:"https://shoe-store-nine-psi.vercel.app/",
    image: "/pic/2.png",
  },
  {
    id: 6,
    year: 2025,
    title: "Store Management Dashboard",
    subtitle: "Web",
    description:
      "Store Management Admin Dashboard built with React.js for efficient and seamless e-commerce management.",
    technologies: ["React", "CSS", "JavaScript"],
    type: "Web",
    url:"https://store-management-ruby.vercel.app/",
    image: "/pic/3.png",
  },
  {
    id: 7,
    year: 2025,
    title: "AI Quiz Generator",
    subtitle: "Python",
    description:
      "An AI-powered quiz generator built with Python, MongoDB, Groq API, and NLP to automate quiz creation and reduce workload for the staff members.",
    technologies: ["Python", "NLP", "Flask API","React","Groq API Key", "MongoDB"],
    type: "Python",
    url:"https://quizgenaids.netlify.app/",
    image: "/pic/11.png",
  },
  {
    id: 8,
    year: 2024,
    title: "PPT Generator",
    subtitle: "Python",
    description:
      "A Python-based PPT generator for churches, built with PyQt6, to automate the creation of song and verse presentations and save time.",
    technologies: ["Python", "PyQt6"],
    type: "Python",
    url:"https://ppt-gen.netlify.app/",
    image: "/pic/4.png",
  },
  {
    id: 9,
    year: 2024,
    title: "Subway Surface Using OpenCV",
    subtitle: "Python",
    description:
      "A subway surface simulation built with motion tracking technology using OpenCV for gesture detection and AutoPyGUI for interactive controls.",
    technologies: ["Python", "OpenCV", "AutoPyGUI"],
    type: "Python",
    url:"https://subway-opencv.netlify.app/",
    image: "/pic/13.png",
  },
  {
    id: 10,
    year: 2024,
    title: "Squid Game",
    subtitle: "Blender VFX",
    description:
      "A Blender VFX project creating cinematic visual effects inspired by Squid Game.",
    technologies: ["Blender", "Sketchfab", "After Effects"],
    type: "Blender",
    url:"https://blenderproject.netlify.app/",
    image: "/pic/6.png",
  },
  {
    id: 11,
    year: 2023,
    title: "Dancing Doll",
    subtitle: "Blender VFX",
    description:
      "A Blender VFX animation showcasing a dancing doll with realistic motion and effects.",
    technologies: ["Blender", "Sketchfab", "After Effects"],
    type: "Blender",
    url:"https://blenderproject.netlify.app/dancingdoll",
    image: "/pic/8.png",
  },
  {
    id: 12,
    year: 2023,
    title: "Building Balls",
    subtitle: "Blender VFX",
    description:
      "A Blender VFX project simulating dynamic ball interactions in a 3D environment.",
    technologies: ["Blender", "Sketchfab", "After Effects"],
    type: "Blender",
    url:"https://blenderproject.netlify.app/buildingballs",
    image: "/pic/15.png",
  },
  {
    id: 13,
    year: 2023,
    title: "iPhone Advertisement",
    subtitle: "Blender Animation",
    description:
      "A Blender animation creating a sleek advertisement for an iPhone product.",
    technologies: ["Blender", "Sketchfab", "BlenderKit"],
    type: "Blender",
    url:"https://blenderproject.netlify.app/iphoneadvertisement",
    image: "/pic/5.png",
  },
  {
    id: 14,
    year: 2023,
    title: "Perfume Advertisement",
    subtitle: "Blender Animation",
    description:
      "A Blender animation producing a visually appealing perfume advertisement.",
    technologies: ["Blender", "Sketchfab", "BlenderKit"],
    type: "Blender",
    url:"https://blenderproject.netlify.app/perfumeadvertisement",
    image: "/pic/10.png",
  },
  {
    id: 15,
    year: 2024,
    title: "Zion Star Pvt. Ltd",
    subtitle: "Blender Title Reveal",
    description:
      "A Blender title reveal animation for Zion Star Pvt. Ltd with cinematic effects.",
    technologies: ["Blender", "Sketchfab", "BlenderKit"],
    type: "Blender",
    url:"https://blenderproject.netlify.app/zionstar",
    image: "/pic/14.png",
  },
  {
    id: 16,
    year: 2025,
    title: "Short Film",
    subtitle: "Blender Animation",
    description:
      "A Blender animation short film combining storytelling with visual effects.",
    technologies: ["Blender", "Sketchfab", "BlenderKit"],
    type: "Blender",
    url:"https://blenderproject.netlify.app/shortfilm",
    image: "/pic/7.png",
  },
];

// ---------------- Project Card ----------------
const ProjectCard = ({ project, onViewProject }) => (
  <div className="project-card">
    <div className="project-info">
      <div className="project-header">
        <span className="project-year">{project.year}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="tech-tags">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <button
        className="view-project-btn"
        onClick={() => onViewProject(project)}
      >
        View Project
      </button>
    </div>
    <div className="project-image-container">
      <img
        src={project.image}
        alt={`${project.title} project screenshot`}
        className="project-image"
      />
    </div>
  </div>
);

// ---------------- Portfolio ----------------
function Portfolio() {
  const [filter, setFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  // ✅ define filteredProjects here
  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All Projects") return true;
    return project.type === filter;
  });

  // ✅ disable scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <div className="portfolio-container">
      <div>
        <h1>Portfolio</h1>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All Projects", "Web", "Mobile App", "Python", "Blender"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project List */}
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewProject={setSelectedProject}
          />
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default Portfolio;