import React from 'react';
import { Router } from '@reach/router';
import { HorNav } from '../../Navigation/navigation';
import Footer from '../../../views/landing/Footer/Footer';
import LandingPage from '../../../views/landing/LandingPage';
import Contact from '../../../views/landing/Contact/Contact';
import Login from '../../../views/onBoarding/Login/Login';
import Signup from '../../../views/onBoarding/Signup/Signup';
import UpdatePassword from '../../../views/updatePassword/UpdatePassword';
import NotFound from '../../../views/notfound/NotFound';

const PublicRoutes = ({ user }) => (
  <>
    <HorNav />
    <Router>
      <LandingPage path="/" user={user} />
      <Contact exact path="/contact" />
      <Login path="/login" />
      <Signup path="/signup" />
      <UpdatePassword path="/updatepassword" />
      <NotFound default />
    </Router>
    <Footer />
  </>
);

export default PublicRoutes;
