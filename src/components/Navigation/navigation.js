import React from 'react';
import { Link } from '@reach/router';
import logo from '../../assets/img/logo.png';

export const HorNav = () => {
  return (
    <>
      <nav className="nav-top">
        <Link className="logo-link" to="/">
          <img
            className="nav-logo"
            src={logo}
            alt="Freehold logo, link home"
            data-testid="nav-logo"
          />
        </Link>
        <ul>
          <li>
            <a href="/#spotlight" className="nav-link" alt="Features">
              Features
            </a>
          </li>
          <li>
            <a href="/#pricing" className="nav-link" alt="Pricing">
              Pricing
            </a>
          </li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default HorNav;
