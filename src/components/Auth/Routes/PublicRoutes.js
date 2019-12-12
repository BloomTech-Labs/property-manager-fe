import React from 'react';
import { Router } from '@reach/router';

import LandingPage from '../../../views/landing/LandingPage';
import Landlord from '../../../views/landing/Landlord';
import Tenant from '../../../views/landing/Tenant';
import Features from '../../../views/landing/Features';
import Contact from '../../../views/landing/Contact';
import FrontPage from '../../../views/landing/FrontPage';

const PublicRoutes = () => (
  <Router>
    <LandingPage path="/">
      <FrontPage path="/" />
      <Landlord path="/landlord" />
      <Tenant path="/tenant" />
      <Features path="/features" />
      <Contact path="/contact" />
    </LandingPage>
  </Router>
);

export default PublicRoutes;
