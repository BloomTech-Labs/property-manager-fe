import React from 'react';
import { Router } from '@reach/router';
import LandingPage from './views/LandingPage';

const App = () => {
  return (
    <div className="App">
      <h1 className="test">Ready</h1>

      <Router>
        <LandingPage path="/" />
      </Router>
    </div>
  );
};

export default App;
