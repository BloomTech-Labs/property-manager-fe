import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { func } from 'prop-types';
import { navigate } from '@reach/router';
import SignUpForm from '../components/Auth/SignUpForm/SignUp';
import { auth } from '../store/actions';

const signup = auth('https://pt6-propman.herokuapp.com/api/auth/register');

const SignUp = ({ toggleFlip }) => {
  const dispatch = useDispatch();

  const signupFn = useCallback(
    ({ email, password }) =>
      dispatch(signup(email, password))
        .then(() => navigate('/dashboard'))
        .catch(err => console.error(err)),
    [dispatch]
  );

  return <SignUpForm submit={signupFn} toggleFlip={toggleFlip} />;
};

SignUp.propTypes = {
  toggleFlip: func.isRequired
};

export default SignUp;
