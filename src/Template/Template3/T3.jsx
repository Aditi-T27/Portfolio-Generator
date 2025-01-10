import React from "react";
import "./T3.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import bike from './Screenshot 2024-02-06 235218.png'
// import SimpleIcons from 'simple-icons';

const T3 = () => {
    // const vueIcon = SimpleIcons.get('vue-dot-js');
  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="profile-info">
          <img
            src={bike}
            alt="Profile image"
            className="profile-image"
          />
          <h1>Name Here</h1>
          <p className="title">User Title</p>
        </div>
        <nav className="social-links">
          <ul className="social-list">
            <li>
              <a
                href="https://github.com/your-username"
                className="social-icon"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/your-profile"
                className="social-icon"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:your-email@example.com"
                className="social-icon"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:your-email@example.com"
                className="social-icon"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Passionate developer with 5+ years of experience building web
          applications. Specialized in React, Node.js, and modern web
          technologies.
        </p>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {[1, 2,3].map((project) => (
            <div key={project} className="project-card">
              <img
                src={`/api/placeholder/300/200`}
                alt={`Project ${project}`}
              />
              <h3>Project Title {project}</h3>
              <p>Brief description of the project and technologies used.</p>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fas fa-code"></i>
                  Code
                </a>
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt"></i>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {["React", "Node.js", "javascriptIcon", "Python", "AWS", "Docker"].map(
            (skill) => (
              <div key={skill} className="skill-item">
                 {skill}
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default T3;
