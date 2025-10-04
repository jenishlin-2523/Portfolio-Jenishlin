import React from "react";
import "../styles/ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Determine button text based on project type
  const getButtonText = (type) => {
    switch (type.toLowerCase()) {
      case "web":
        return "Visit Website";
      case "mobile app":
      case "app":
        return "Visit App";
      case "blender":
        return "View Project";
      default:
        return "View Project";
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="modal-header">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="modal-image"
          />
          <div className="modal-text-content">
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
        </div>

        <p className="modal-description">{project.description}</p>

        <div className="modal-tech-list">
          <h4>Technologies Used:</h4>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Conditional button */}
        {project.url && (
  <div className="modal-buttons-container">
    {/* Visit button */}
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`modal-visit-btn ${project.type.toLowerCase()}`}
    >
      {getButtonText(project.type)}
    </a>

    {/* Close button */}
    <button className="modal-close-bottom-btn" onClick={onClose}>
      Close
    </button>
  </div>
)}

      </div>
    </div>
  );
};

export default ProjectModal;
