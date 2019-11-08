import React from 'react';
import { Router } from '@reach/router';
import LandingPage from './views/LandingPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <LandingPage path="/" />
      </Router>
    </div>
  );
};

export default App;
