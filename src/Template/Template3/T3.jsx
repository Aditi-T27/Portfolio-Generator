import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import './T3.css';

const Template3 = () => {
  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <header className="header">
        <div className="profile-info">
          <img 
            src="/api/placeholder/150/150" 
            alt="Profile" 
            className="profile-image"
          />
          <h1>John Doe</h1>
          <p className="title">Full Stack Developer</p>
        </div>
        <nav className="social-links">
          <a href="#" className="social-icon">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="social-icon">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="social-icon">
            <Mail className="w-6 h-6" />
          </a>
        </nav>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>Passionate developer with 5+ years of experience building web applications.
           Specialized in React, Node.js, and modern web technologies.</p>
      </section>

      {/* Projects Grid */}
      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {[1, 2, 3, 4].map((project) => (
            <div key={project} className="project-card">
              <img 
                src={`/api/placeholder/300/200`} 
                alt={`Project ${project}`} 
              />
              <h3>Project Title {project}</h3>
              <p>Brief description of the project and technologies used.</p>
              <div className="project-links">
                <a href="#" className="project-link">
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a href="#" className="project-link">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((skill) => (
            <div key={skill} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get In Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Template3;