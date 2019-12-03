import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
import SignUpForm from '../../components/SignUpForm/SignUp';
import { auth } from '../../store/actions';

const signup = auth('https://pt6-propman.herokuapp.com/api/auth/register');

const SignUp = () => {
  const dispatch = useDispatch();

  const signupFn = useCallback(
    ({ email, password }) =>
      dispatch(signup(email, password))
        .then(() => navigate('/dashboard'))
        .catch(err => console.error(err)),
    [dispatch]
  );

  return (
    <div className="signUpPage">
      <div>This is the Registration Page</div>
      <SignUpForm submit={signupFn} />
    </div>
  );
};

export default SignUp;
