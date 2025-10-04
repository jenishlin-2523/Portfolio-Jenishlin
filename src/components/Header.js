import React, { useRef, useEffect } from "react";
import { User, FileText, Briefcase, Mail } from "lucide-react";

const Header = ({ activeSection, setActiveSection }) => {
  const navRef = useRef(null);
  const indicatorRef = useRef(null);

  const links = [
    { name: "ABOUT", icon: <User /> },
    { name: "RESUME", icon: <FileText /> },
    { name: "PORTFOLIO", icon: <Briefcase /> },
    { name: "CONTACT", icon: <Mail /> },
  ];

  // Move the pill indicator to the active link
  const updateIndicator = () => {
    const index = links.findIndex(
      (link) => link.name.toLowerCase() === activeSection
    );
    const navLinks = navRef.current?.querySelectorAll("a");
    const activeLink = navLinks?.[index];
    if (activeLink && indicatorRef.current) {
      indicatorRef.current.style.width = `${activeLink.offsetWidth}px`;
      indicatorRef.current.style.transform = `translateX(${activeLink.offsetLeft}px)`;
    }
  };

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection]);

  const handleClick = (e, link) => {
    e.preventDefault();
    setActiveSection(link.name.toLowerCase()); // update App state
  };

  return (
    <header className="header">
      <nav ref={navRef} className="nav-container">
        <ul className="nav-links">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.name.toLowerCase()}`}
                className={activeSection === link.name.toLowerCase() ? "active" : ""}
                onClick={(e) => handleClick(e, link)}
              >
                <span className="nav-text">{link.name}</span>
                <span className="nav-icon">{link.icon}</span>
              </a>
            </li>
          ))}
        </ul>
        <span className="nav-indicator" ref={indicatorRef}></span>
      </nav>
    </header>
  );
};

export default Header;
