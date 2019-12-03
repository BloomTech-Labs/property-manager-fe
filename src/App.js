import React from 'react';
import { Router } from '@reach/router';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import LandingPage from './views/landing/LandingPage';
import Dashboard from './views/dashboard/Dashboard';
import SignUp from './views/landing/SignUp';
import Landlord from './views/landing/Landlord';
import Tenant from './views/landing/Tenant';
import Features from './views/landing/Features';
import Contact from './views/landing/Contact';
import FrontPage from './views/landing/FrontPage';

setDefaultBreakpoints([{ mobile: 250 }, { tablet: 769 }, { desktop: 1025 }]);

const App = () => {
  return (
    <BreakpointProvider>
      <div className="App">
        <Router>
          <LandingPage path="/">
            <FrontPage path="/" />
            <SignUp path="signup" />
            <Landlord path="landlord" />
            <Tenant path="tenant" />
            <Features path="features" />
            <Contact path="contact" />
          </LandingPage>

          <Dashboard path="dashboard" />
        </Router>
      </div>
    </BreakpointProvider>
  );
};

export default App;
