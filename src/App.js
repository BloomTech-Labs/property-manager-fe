import React from 'react';
import { Router } from '@reach/router';
import LandingPage from './views/LandingPage';
import Dashboard from './views/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Router>
        <LandingPage path="/" />
        <Dashboard path="/dash" />
      </Router>
    </div>
  );
};

export default App;
