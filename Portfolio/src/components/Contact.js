import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import "../styles/Contact.css";

function Contact() {
  return (

      <div>
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-subtitle">
          Feel free to reach out if you’d like to collaborate or just say hi 👋
        </p>

        <div className="contact-cards">
          {/* Email */}
          <div className="contact-card">
            <div className="icon-container">
              <FiMail />
            </div>
            <h3>Email</h3>
            <p>
              <a href="mailto:jenishlinb@gmail.com" className="contact-link">
                jenishlinb@gmail.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <div className="icon-container">
              <FiPhone />
            </div>
            <h3>Phone</h3>
            <p>
              <a href="https://wa.me/917418932321" className="contact-link">
                +91 7418932321
              </a>
            </p>
          </div>

          {/* Location */}
          <div className="contact-card">
            <div className="icon-container">
              <GrLocation />
            </div>
            <h3>Location</h3>
            <p Style = "color:#7a3aed" >Nagercoil,Tamil Nadu</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <a
            href="https://github.com/jenishlin-2523"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jenishlin-brisho-m-a043ba371/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

  );  
}

export default Contact;
