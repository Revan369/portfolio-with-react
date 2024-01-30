import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        {/* Include the header component on every page */}
        <Header />
        {/* Use React Router to switch between different pages */}
        <Switch>
          {/* Render the Home component when the path is exactly '/' */}
          <Route path="/" exact component={Home} />
          {/* Render the Projects component when the path is '/projects' */}
          <Route path="/projects" component={Projects} />
          {/* Render the Contact component when the path is '/contact' */}
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;