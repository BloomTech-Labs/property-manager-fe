import React from 'react';
import { Route, Switch, __RouterContext, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import SignUpForm from '../../components/Auth/SignUpForm/SignUp';
import UserType from '../dashboard/getstarted/UserType';
import RegisterForm from '../dashboard/getstarted/RegisterForm';

const GetStarted = () => {
  return (
    <div className="getStarted">
      <h1>test</h1>
    </div>
  );
};

export default GetStarted;
