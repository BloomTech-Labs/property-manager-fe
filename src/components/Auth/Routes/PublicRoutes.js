import React from 'react';
import { Router } from '@reach/router';
import { HorNav } from '../../Navigation/navigation';
import Footer from '../../../views/landing/Footer/Footer';
import LandingPage from '../../../views/landing/LandingPage';
import Contact from '../../../views/landing/Contact/Contact';
import Login from '../../../views/onBoarding/login';
import SignUp from '../../../views/onBoarding/signup';
import NotFound from '../../../views/notfound/NotFound';

const PublicRoutes = ({ user }) => (
  <>
    <HorNav />
    <Router>
      <LandingPage path="/" user={user} />
      <Contact exact path="/contact" />
      <Login path="/login" />
      <SignUp path="/signup" />
      <NotFound default />
    </Router>
    <Footer />
  </>
);

export default PublicRoutes;
