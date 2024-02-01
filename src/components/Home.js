import React from 'react';

const Home = () => {
  const styles = {
    backgroundColor: 'orange',
    padding: '70px',
    textAlign: 'center',
  };
  return (
    <div style={styles}>
      {/* Display basic information on the home page */}
      <h1>Christopher Di Luca</h1>
      {/* Display a headshot or avatar */}
      <img src="/Wolf-icon.png" alt=" Avatar image" />
      {/* Write a brand statement */}
      <p>Front End Web Developer</p>
      {/* Indicate that this is your portfolio site */}
      <p>This is my portfolio site.</p>
    </div>
  );
};

export default Home;