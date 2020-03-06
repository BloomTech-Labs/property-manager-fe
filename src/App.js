import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router } from '@reach/router';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
// Landing imports
import LandingPage from './views/landing/LandingPage';
import Features from './views/landing/Features/Features';
import Contact from './views/landing/Contact';
import Home from './views/landing/Home';
import Footer from './views/landing/Footer/Footer';
// import GetStarted from './views/SignUp';
import ProtectedRoutes from './components/Auth/Routes/ProtectedRoutes';
import { getUserInfo } from './store/actions/index';
import Toast from './components/UI/Toast';
import Login from './views/onBoarding/login';
import SignUp from './views/onBoarding/signup';

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

  const token = getToken();

  const userType = useSelector(state => state.getUserReducer.user.type);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <BreakpointProvider>
      <div className="App">
        <Router>
          <LandingPage path="/">
            <Home path="/" />
            <Features path="features" />
          </LandingPage>
          <Contact path="/contact" />
          <Login path="/login" />
          <SignUp path="/signup" />
          <ProtectedRoutes
            path="dashboard/*"
            token={token}
            userType={userType}
          />
        </Router>
        <Toast />
        <Footer />
      </div>
    </BreakpointProvider>
  );
};

export default App;
