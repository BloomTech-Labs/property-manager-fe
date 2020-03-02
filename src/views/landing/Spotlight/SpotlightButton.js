import React from 'react';
import { useModal } from '../../../hooks/useModal';
import { AuthFlip } from '../../../components/Auth/AuthFlip';

const SpotlightButton = () => {
  const { isShowing, close, toggle } = useModal();

  return (
    <div className="btnWrapper">
      <button className="spotBtn" type="submit" onClick={() => toggle()}>
        Sign up
      </button>
      <AuthFlip close={close} isShowing={isShowing} />
    </div>
  );
};

export default SpotlightButton;
