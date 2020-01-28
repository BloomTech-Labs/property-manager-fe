import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router } from '@reach/router';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
// Landing imports
import LandingPage from './views/landing/LandingPage';
import Landlord from './views/landing/Landlord';
import Tenant from './views/landing/Tenant';
import Features from './views/landing/Features';
import Contact from './views/landing/Contact';
import Home from './views/landing/Home';
// import GetStarted from './views/SignUp';
import ProtectedRoutes from './components/Auth/Routes/ProtectedRoutes';
import { getUserInfo } from './store/actions/index';

setDefaultBreakpoints([{ mobile: 250 }, { tablet: 769 }, { desktop: 1025 }]);

const App = () => {
  function getToken() {
    try {
      const token = localStorage.getItem('token');
      return token;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      return null;
    }
  }

<<<<<<< HEAD
  function getType() {
    try {
      const userType = localStorage.getItem('userType')
      return userType;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  const token = getToken();
  const userType = getType();
=======
  const token = getToken();

  const userType = useSelector(state => state.getUserReducer.user.type);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
>>>>>>> cebe74d31018922306650a256dc76608d104d781

  return (
    <BreakpointProvider>
      <div className="App">
        <Router>
          <LandingPage path="/">
            <Home path="/" />
            <Landlord path="landlord" />
            <Tenant path="tenant" />
            <Features path="features" />
            <Contact path="contact" />
          </LandingPage>
          <ProtectedRoutes
            path="dashboard/*"
            token={token}
            userType={userType}
          />
        </Router>
      </div>
    </BreakpointProvider>
  );
};

export default App;
