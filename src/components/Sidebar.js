import React, { useState, useEffect } from "react";
import "../styles/Sidebar.css";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io"; // updated arrow

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll while sidebar is open + close on Escape
  useEffect(() => {
    const prior = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prior || "";

    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prior || "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />
      )}

      <aside className={`sidebar ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <button
          className="sidebar-close"
          aria-label="Close sidebar"
          onClick={() => setIsOpen(false)}
        >
          <AiOutlineClose />
        </button>

        <div className="profile-image-container">
          <img src="/img/d.png" alt="Jenishlin" className="profile-image" />
        </div>

        <h2>Jenishlin</h2>
        <p className="role">React & Web Developer</p>

        <div className="contact-info">
          <div className="contact-item">
            <FiPhone />
            <span>+91 7418932321</span>
          </div>

          <div className="contact-item">
            <GrLocation />
            <span>Nagercoil,Tamilnadu.</span>
          </div>
        </div>

        <div className="social-icons-container">
          <a
            href="https://github.com/jenishlin-2523"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jenishlin-brisho-m-a043ba371/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </aside>

      {/* Footer bar */}
      <button
        className={`mobile-footer ${isOpen ? "hidden" : ""}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <div className="footer-left">
          <IoIosArrowForward className="footer-arrow" />
        </div>
        <div className="footer-right">
          <div className="footer-avatar">
            <img src="/img/d.png" alt="Avatar" />
          </div>
          <span className="footer-text">Jenishlin | Portfolio</span>
        </div>
      </button>
    </>
  );
};

export default Sidebar;
