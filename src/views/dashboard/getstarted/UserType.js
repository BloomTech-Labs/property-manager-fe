import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';

const UserType = () => {
  return (
    <AbsoluteWrapper>
      <div className="userTypePage">
        <h1>What do you want to register as?</h1>
        <div className="userTypeBox">
          <button type="button" className="userType">
            Tenant
          </button>
          <button type="button" className="userType">
            Landlord
          </button>
        </div>
      </div>
    </AbsoluteWrapper>
  );
};

export default UserType;
