import React from 'react';
import { Link } from '@reach/router';
import logo from '../../assets/img/logo.png';

export const HorNav = () => {
  return (
    <>
      <nav className="nav-top">
        <Link className="logo-link" to="/">
          <img className="nav-logo" src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            {/* TODO: link to features section */}
            <Link className="nav-link" to="/features">
              Features
              {/* and Pricing */}
            </Link>
          </li>
          <li>
            {/* TODO: link to pricing section */}
            <Link className="nav-link" to="/pricing">
              Pricing
            </Link>
          </li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </ul>
      </nav>
    </>
  );
};

export const VertNav = () => {
  return (
    <nav className="nav-side">
      <ul>
        <li>
          <Link className="profile" to="profile">
            {/* <Avi width={75} height={75} name="avatar" /> */}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/dashboard">
            Overview
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="properties">
            Properties
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HorNav;
