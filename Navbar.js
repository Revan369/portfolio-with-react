import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/* Create a navigation bar with links to different pages */}
      <ul>
        {/* Link to the Home page */}
        <li><Link to="/">Home</Link></li>
        {/* Link to the Projects page */}
        <li><Link to="/projects">Projects</Link></li>
        {/* Link to the Contact page */}
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;