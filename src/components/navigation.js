import React, { useState, useCallback } from 'react';
import { Link } from '@reach/router';
import { useDispatch } from 'react-redux';
import { TopNav, SideNav } from './UI/index';
import logo from '../assets/img/logo100.png';
import { ReactComponent as Avi } from '../assets/img/user-solid.svg';
import LoginForm from './LoginForm/LoginForm';
import { auth } from '../store/actions';

const dispatchLogin = auth('https://pt6-propman.herokuapp.com/api/auth/login');

export const HorNav = () => {
  const [show, setShow] = useState();
  const dispatch = useDispatch();

  const login = useCallback(
    ({ email, password }) => dispatch(dispatchLogin(email, password)),
    [dispatch]
  );

  return (
    <TopNav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/landlord">Landlords</Link>
        <Link to="/tenant">Renters</Link>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/features">Features and Pricing</Link>
        <Link to="/contact">Contact</Link>
        <button
          className="modal-btn"
          type="button"
          onClick={() => setShow(!show)}
        >
          <Avi className="avatar" width={25} height={25} name="avatar" />
        </button>
      </ul>
      {show ? <LoginForm submit={login} /> : null}
    </TopNav>
  );
};

export const VertNav = () => {
  return (
    <SideNav>
      <ul>
        <Link to="#login">
          <Avi width={25} height={25} name="avatar" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/landlord">Landlords</Link>
        <Link to="/tenant">Renters</Link>
        <Link to="/features">Features and Pricing</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </SideNav>
  );
};
