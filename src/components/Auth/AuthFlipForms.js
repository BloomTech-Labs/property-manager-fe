/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useTransition, animated as a } from 'react-spring';

export const AuthFlipForms = ({ flipped, children }) => {
  const flipModal = useTransition(flipped, null, {
    from: { opacity: 0 },
    enter: {
      transform: `perspective(600px) rotateY(180deg)`
    },
    leave: {
      transform: `perspective(600px) rotateY(0deg)`
    }
  });

  return flipModal.map(
    ({ item, key, props }) =>
      item && (
        <a.div key={key} props={props} className="auth-flip">
          {children}
        </a.div>
      )
  );
};
