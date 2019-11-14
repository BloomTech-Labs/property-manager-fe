import React from 'react';
import { Router } from '@reach/router';
import LandingPage from './views/LandingPage';
import Landlord from './views/Landlord';
import Tenant from './views/Tenant';
import Features from './views/Features';
import Contact from './views/Contact';
import Dashboard from './views/Dashboard';
import { HorNav } from './components/navigation';

const App = () => {
  return (
    <div className="App">
      <HorNav />
      <Router>
        <LandingPage path="/" />
        <Landlord path="/landlord" />
        <Tenant path="/tenant" />
        <Features path="/features" />
        <Contact path="/contact" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  );
};

export default App;
