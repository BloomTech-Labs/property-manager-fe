import React from 'react';
import { Router } from '@reach/router';
import LandingPage from './views/LandingPage';
import Dashboard from './views/Dashboard';
import SignupTest from './components/SignUpForm/SignUp';

const App = () => {
  return (
    <div className="App">
      <Router>
        <LandingPage path="/" />
        <Dashboard path="/dash" />
        <SignupTest path="/signup" />
      </Router>
    </div>
  );
};

export default App;
