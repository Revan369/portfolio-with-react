import React from 'react';
import Project from './Project';
import projectData from '../data/projectData'; // you must have a JSON file

const Projects = () => {
  return (
    <div>
      {/* Display a list of projects using the Project component */}
      <h2>Projects</h2>
      {projectData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;