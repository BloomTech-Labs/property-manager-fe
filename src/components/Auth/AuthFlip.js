/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { func } from 'prop-types';
import { useTransition, animated as a } from 'react-spring';
import { AnimatedModal } from '../../hooks/useModal';
import { AuthFlipForms } from './AuthFlipForms';

export const AuthFlip = ({ loginSubmit, signupFn, close, isShowing }) => {
  const [flipped, setFlip] = useState(false);
  const toggle = () => {
    return setFlip(!flipped);
  };

  const fadeModal = useTransition(isShowing, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return fadeModal.map(
    ({ item, key, props }) =>
      item && (
        <AnimatedModal close={close} key={key}>
          <a.div style={props} className="auth-flip">
            <AuthFlipForms
              flipped={flipped}
              loginSubmit={loginSubmit}
              signupFn={signupFn}
              toggle={toggle}
            />
          </a.div>
        </AnimatedModal>
      )
  );
};

AuthFlip.propTypes = {
  loginSubmit: func.isRequired,
  signupFn: func.isRequired,
  close: func.isRequired
};

/* <AuthFlipForms flipped={!flipped}>
<LoginForm submit={loginSubmit} toggleFlip={toggle} />
</AuthFlipForms>
<AuthFlipForms flipped={flipped}>
<SignUpForm submit={signupFn} toggleFlip={toggle} />
</AuthFlipForms> */
