import React from 'react';
import '../cssfolder/Projects.css';

export default function Projects() {
    return (
        <div className="projects-container">
            <h1 className="projects-header">Projects</h1>
            <div className="project-item">
                <h2 className="project-title">Application Tracker</h2>
                <p className="project-description">
                    Developed an application that tracks the status of application forms submitted to government offices.
                </p>
                <p className="project-technologies">
                    Built using React.JS, SpringBoot, and MySQL
                </p>
            </div>
            <div className="project-item">
                <h2 className="project-title">Cash Book App</h2>
                <p className="project-description">
                    Developed a comprehensive personal finance management application that streamlines tracking of income, expenses, and loan details.
                </p>
                <p className="project-technologies">
                    Built using React.JS, SpringBoot, and MySQL
                </p>
            </div>
            <div className="project-item">
                <h2 className="project-title">Veggie Vibes</h2>
                <p className="project-description">
                    Veggie Vibes represents my foundational experience in developing React applications.
                </p>
                <p className="project-technologies">
                    Built using React.JS and JSON Server
                </p>
            </div>
            <div className="project-item">
                <h2 className="project-title">Library Management</h2>
                <p className="project-description">
                    A project for managing library operations (details to be added).
                </p>
                <p className="project-technologies">
                    Technologies used (details to be added).
                </p>
            </div>
        </div>
    );
}
