// Project.js

import React from 'react';
import './Project.css'; // Import the CSS file for styling

const Project = ({ title, deployedLink, githubLink, image }) => {
  return (
    <div className="project-container">
      <img src={image} alt={`${title} project`} className="project-image" />
      <h3>{title}</h3>
      <p>Playtest it Yourself Here: <a href={deployedLink} target="_blank" rel="noopener noreferrer">{deployedLink}</a></p>
      <p>GitHub Repository: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a></p>
    </div>
  );
};

export default Project;