import React from 'react';
import { Link } from '@reach/router';
import footerLogo from '../../../assets/img/footerLogo.png';
import './footer.scss';

const Features = () => {
  // Get the current year
  const getYear = () => new Date(Date.now()).getFullYear().toString();

  return (
    <div className="footerWrapper">
      <h3 className="footerHeader">&copy; Copyright Freehold {getYear()}</h3>
      <div className="footerLogo">
        <img src={footerLogo} alt="Freehold logo" />
      </div>
      <Link className="footerLink" to="/contact">
        Contact Us
      </Link>
    </div>
  );
};

export default Features;
