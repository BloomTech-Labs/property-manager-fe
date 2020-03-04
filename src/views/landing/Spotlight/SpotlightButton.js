import React from 'react';
import { navigate } from '@reach/router';

const SpotlightButton = () => {
  return (
    <div className="btnWrapper">
      <button
        className="spotBtn"
        type="submit"
        onClick={() => navigate('/signup')}
      >
        Sign up
      </button>
    </div>
  );
};

export default SpotlightButton;
