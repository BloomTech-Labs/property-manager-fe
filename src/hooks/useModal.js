/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Portal from '@reach/portal';
import { FocusOn } from 'react-focus-on';

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  function toggle() {
    setIsShowing(!isShowing);
  }

  function close() {
    setIsShowing(false);
  }

  const shell = ({ children }) => {
    return <Portal>{children}</Portal>;
  };

  const Modal = ({ children, toggle }) => {
    return (
      <Portal>
        <FocusOn
          returnFocus
          onClickOutside={() => toggle()}
          onEscapeKey={() => toggle()}
        >
          {children}
        </FocusOn>
      </Portal>
    );
  };

  return {
    isShowing,
    toggle,
    close,
    shell,
    Modal
  };
};

export const AnimatedModal = ({ children, close }) => {
  return (
    <Portal>
      <FocusOn
        returnFocus
        onClickOutside={() => close()}
        onEscapeKey={() => close()}
      >
        {children}
      </FocusOn>
    </Portal>
  );
};
