import React from 'react';
import './style.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <a href={link} target="" rel="noopener noreferrer">
        <img className="project-image" src={image} alt={title} />
      </a>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a className="view-project-button" href={link} target="" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
