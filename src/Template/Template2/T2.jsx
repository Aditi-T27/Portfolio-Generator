import React, { useState, useEffect } from 'react';
import data from './portfolioData.json'; // Adjust the path based on your folder structure
import './Portfolio.css';

function Profile({ profile, isCollapsed, toggleCollapse }) {
    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="collapsed-info">
                <img src={profile.profileImage} alt="Profile" className="profile-image"
                    style={{ width: isCollapsed ? '40px' : '200px', height: isCollapsed ? '40px' : '200px' }}
                />
                <h1 className="name">{profile.name}</h1>
            </div>

            {!isCollapsed && (
                <>
                    <img src={profile.profileImage} alt="Profile" className="profile-image" />
                    <h1 className="name">{profile.name}</h1>
                    <h2 className="title">{profile.title}</h2>
                    <div className="contact-info">
                        <div>{profile.email}</div>
                        <a href={profile.github} className="link">{profile.github}</a>
                        <a href={profile.linkedin} className="link">{profile.linkedin}</a>
                    </div>
                </>
            )}

            <button className="toggle-button" onClick={toggleCollapse} aria-expanded={!isCollapsed}
                aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
                {isCollapsed ? '⌄' : '⌃'}
            </button>
        </div>
    );
}

function Experience({ experience }) {
    return (
        <section>
            <h2 className="section-heading">Experience</h2>
            {experience.map((exp, index) => (
                <div className="experience-card" key={index}>
                    <h3>{exp.position}</h3>
                    <p>{exp.date}</p>
                    <ul>
                        {exp.responsibilities.map((task, i) => (
                            <li key={i}>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

function Skills({ skills }) {
    return (
        <section>
            <h2 className="section-heading">Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index}>• {skill}</div>
                ))}
            </div>
        </section>
    );
}

function Projects({ projects }) {
    return (
        <section>
            <h2 className="section-heading">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="link">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

function DarkThemePortfolio() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && !isCollapsed && window.innerWidth <= 820) {
                setIsCollapsed(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isCollapsed]);

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div className="portfolio-container">
            <Profile profile={data.profile} isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
            <main className={`main-content ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
                <Experience experience={data.experience} />
                <Skills skills={data.skills} />
                <Projects projects={data.projects} />
            </main>
        </div>
    );
}

export default DarkThemePortfolio;
