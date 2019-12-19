import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
import SignUpForm from '../components/Auth/SignUpForm/SignUp';
import { auth } from '../store/actions';

const signup = auth('https://pt6-propman.herokuapp.com/api/auth/register');

const SignUp = () => {
  const dispatch = useDispatch();

  const signupFn = useCallback(
    ({ email, password }) =>
      dispatch(signup(email, password))
        .then(() => navigate('/dashboard'))
        // eslint-disable-next-line no-console
        .catch(err => console.error(err)),
    [dispatch]
  );

  return (
    <div className="signUpPage">
      <SignUpForm submit={signupFn} />
    </div>
  );
};

export default SignUp;
