import React from 'react';
// import './Projects.css';

const Projects: React.FC = () => {
    return (
        <div className="projects-page">
            <h2>Wybrane projekty</h2>
            <div className="project-list">
                <div className="project-item">
                    <h3>Projekt 1</h3>
                    <p>Opis projektu 1...</p>
                </div>
                <div className="project-item">
                    <h3>Projekt 2</h3>
                    <p>Opis projektu 2...</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
