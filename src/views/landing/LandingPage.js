/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { HorNav } from '../../components/navigation';

const LandingPage = props => {
  return (
    <>
      <HorNav />
      {props.children}
    </>
  );
};

export default LandingPage;
