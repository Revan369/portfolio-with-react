// Projects.js
import React from 'react';
import Project from './Project';
import './Projects.css'; // Import the CSS file for styling

const projectData = [
  {
    title: 'Remastered Snake Game',
    deployedLink: 'https://revan369.github.io/remastered-snake-game/',
    githubLink: 'https://github.com/Revan369/remastered-snake-game',
    image: './Screenshot 2024-02-01 at 19.59.48.png',
  },
  {
    title: 'Simple side scroller 2 (WIP)',
    deployedLink: 'https://revan369.github.io/simple-side-scroller-2/',
    githubLink: 'https://github.com/Revan369/simple-side-scroller-2',
    image: './Screenshot 2024-02-01 at 20.10.07.png',
  },
  // Add more project objects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
