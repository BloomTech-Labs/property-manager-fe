import React, { useState } from 'react';
import { func, bool } from 'prop-types';
import { useSpring, animated as a } from 'react-spring';
import LoginForm from './LoginForm/LoginForm';
import SignUp from './SignUpForm/SignUp';
import { AuthFlipContainer } from '../UI';

const AuthFlip = ({ loginSubmit, signupFn, show, setShow }) => {
  const [flipped, setFlip] = useState(true);

  const toggle = () => {
    return setFlip(!flipped);
  };

  const { transform, opacity } = useSpring({
    opacity: [1, 0, 1],
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const AuthFlipCard = a(AuthFlipContainer);

  return (
    <>
      <AuthFlipCard
        style={{
          opacity,
          transform
        }}
      >
        {flipped ? (
          <LoginForm
            submit={loginSubmit}
            toggleFlip={toggle}
            show={show}
            setShow={setShow}
          />
        ) : (
          <SignUp
            submit={signupFn}
            toggleFlip={toggle}
            show={show}
            setShow={setShow}
          />
        )}
      </AuthFlipCard>
    </>
  );
};

AuthFlip.propTypes = {
  loginSubmit: func.isRequired,
  signupFn: func.isRequired,
  show: bool.isRequired,
  setShow: func.isRequired
};

export default AuthFlip;
