import React, { useState } from 'react';
import { func, bool } from 'prop-types';
import { useSpring, animated as a } from 'react-spring';
import LoginForm from './LoginForm/LoginForm';
import SignUp from './SignUpForm/SignUp';
import { AuthFlipContainer } from '../UI';

const AuthFlip = ({ loginSubmit, signupFn, show, setShow }) => {
  const [flipped, setFlip] = useState(false);

  const toggle = () => {
    return setFlip(!flipped);
  };

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const AuthFlipCard = a(AuthFlipContainer);
  const AuthFlipBack = a(AuthFlipContainer);

  return (
    <>
      <AuthFlipCard
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <LoginForm
          submit={loginSubmit}
          toggleFlip={toggle}
          show={show}
          setShow={setShow}
        />
      </AuthFlipCard>

      <AuthFlipBack
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`)
        }}
      >
        <SignUp
          submit={signupFn}
          toggleFlip={toggle}
          show={show}
          setShow={setShow}
        />
      </AuthFlipBack>
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
