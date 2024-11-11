// src/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                <div className="project">
                    <h3>Project 1</h3>
                    <p>A brief description of the project.</p>
                </div>
                <div className="project">
                    <h3>Project 2</h3>
                    <p>A brief description of the project.</p>
                </div>
                <div className="project">
                    <h3>Project 3</h3>
                    <p>A brief description of the project.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
