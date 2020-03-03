/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useTransition, animated as a } from 'react-spring';
import { bool, func } from 'prop-types';
import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './SignUpForm/SignUp';

export const AuthFlipForms = ({ flipped, loginSubmit, signupFn, toggle }) => {
  const flipAnimation = useTransition(flipped, null, {
    from: { opacity: 0 },
    enter: {
      opacity: 1,
      transform: `perspective(1000px) rotateY(0deg)`,
      delay: 200
    },
    leave: {
      // Instead of changing opacity, every child of the selector can get turned off
      // Or some backface trickery with an intentional delay to smooth the animation
      opacity: 0,
      transform: `perspective(1000px) rotateY(180deg)`
    }
  });

  return flipAnimation.map(({ item, props, key }) => {
    return item ? (
      <a.div style={props} className="auth-flip__form reversed" key={key}>
        <SignUpForm submit={signupFn} toggleFlip={toggle} />
      </a.div>
    ) : (
      <a.div style={props} className="auth-flip__form" key={key}>
        <LoginForm submit={loginSubmit} toggleFlip={toggle} />
      </a.div>
    );
  });
};

AuthFlipForms.propTypes = {
  flipped: bool.isRequired,
  loginSubmit: func || func.isRequired,
  signupFn: func || func.isRequired,
  toggle: func.isRequired
};
