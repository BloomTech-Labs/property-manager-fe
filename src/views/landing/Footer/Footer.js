import React from 'react';
import { Link } from '@reach/router';
import './footer.scss';

const Features = () => {
  return (
    <div className="footerWrapper">
      <Link className="footerLink" to="/contact">
        Contact Us
      </Link>
      <h3 className="footerHeader">&copy; Copyright PropMan 2020</h3>
    </div>
  );
};

export default Features;
