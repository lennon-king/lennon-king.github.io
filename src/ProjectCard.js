import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <Link to={link}>
          <img className="project-image" src={image} alt={title} />
      </Link>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <Link className="view-project-button" to={link}>
            View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
