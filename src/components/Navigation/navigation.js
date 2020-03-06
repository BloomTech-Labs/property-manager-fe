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
            <a href="#spotlight" className="nav-link" alt="Features">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="nav-link" alt="Pricing">
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
