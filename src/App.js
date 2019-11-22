import React from 'react';
import { Router } from '@reach/router';
import { HorNav } from './components/navigation';
import LandingPage from './views/LandingPage';
import Dashboard from './views/Dashboard';
import SignUp from './views/SignUp';
import Landlord from './views/Landlord';
import Tenant from './views/Tenant';
import Features from './views/Features';
import Contact from './views/Contact';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([{ mobile: 400 }, { tablet: 769 }, { desktop: 1025 }]);

const App = () => {
  return (
    <BreakpointProvider>
      <div className="App">
        <HorNav />
        <Router>
          <LandingPage path="/" />
          <Dashboard path="/dash" />
          <SignUp path="/signup" />
          <Landlord path="/landlord" />
          <Tenant path="/tenant" />
          <Features path="/features" />
          <Contact path="/contact" />
          <Dashboard path="/dashboard" />
        </Router>
      </div>
    </BreakpointProvider>
  );
};

export default App;
