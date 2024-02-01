// Contact.js

import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <ul className="contact-list">
        <li className="contact-item">
          GitHub: <a className="contact-link" href="https://github.com/revan369" target="_blank" rel="noopener noreferrer">https://github.com/revan369</a>
        </li>
        <li className="contact-item">Email: dilucachris@gmail.com</li>
        <li className="contact-item">
          LinkedIn: <a className="contact-link" href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/yourusername</a>
        </li>
        {/* Add more contact information as needed */}
      </ul>
    </div>
  );
}

export default Contact;