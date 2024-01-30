import React from 'react';

const Project = ({ title, deployedLink, githubLink, image }) => {
  return (
    <div>
      {/* Display information for a single project */}
      <h3>{title}</h3>
      {/* Link to the deployed version */}
      <p>Link to deployed version: <a href={deployedLink}>{deployedLink}</a></p>
      {/* Link to the GitHub repository */}
      <p>Link to GitHub repository: <a href={githubLink}>{githubLink}</a></p>
      {/* Display a screenshot or GIF of the deployed application */}
      <img src={image} alt={`Screenshot of ${title}`} />
    </div>
  );
};

export default Project;