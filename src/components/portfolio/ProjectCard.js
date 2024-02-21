// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, githubLink, liveLink, description }) => {
  return (
    <div className="projectCard">
      <div className="projectTitle">
        <h3>{title}</h3>
      </div>
      <div className="projectInfo">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a> | <a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
