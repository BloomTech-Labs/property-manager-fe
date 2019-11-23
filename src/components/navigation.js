import React, { useState, useCallback } from 'react';
import { Link } from '@reach/router';
import { useDispatch } from 'react-redux';
import { Breakpoint } from 'react-socks';
import { bool, func } from 'prop-types';
import { TopNav, SideNav, NavBurger, BurgerMenu } from './UI/index';
import logo from '../assets/img/logo100.png';
import { ReactComponent as Avi } from '../assets/img/user-solid.svg';
import LoginForm from './LoginForm/LoginForm';
import { auth } from '../store/actions';

const dispatchLogin = auth('https://pt6-propman.herokuapp.com/api/auth/login');

export const HorNav = () => {
  const [show, setShow] = useState();
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  const login = useCallback(
    ({ email, password }) => dispatch(dispatchLogin(email, password)),
    [dispatch]
  );

  return (
    <div className="nav">
      <Breakpoint desktop only>
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
            <button type="button" onClick={() => setShow(!show)}>
              <Avi width={25} height={25} name="avatar" />
            </button>
          </ul>
          {show ? <LoginForm submit={login} /> : null}
        </TopNav>
      </Breakpoint>
      <Breakpoint tablet only>
        <TopNav>
          <ul>
            <Link to="/landlord">Landlords</Link>
            <Link to="/tenant">Renters</Link>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <Link to="/features">Features and Pricing</Link>
            <Link to="/contact">Contact</Link>
            <button type="button" onClick={() => setShow(!show)}>
              <Avi width={25} height={25} name="avatar" />
            </button>
          </ul>
          {show ? <LoginForm submit={login} /> : null}
        </TopNav>
      </Breakpoint>
      <Breakpoint mobile only>
        <TopNav>
          <Burger isOpen={isOpen} setOpen={setOpen} />
          <BurgerNav isOpen={isOpen} setOpen={setOpen} />
        </TopNav>
      </Breakpoint>
    </div>
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

// eslint-disable-next-line react/prop-types
export const Burger = ({ isOpen, setOpen }) => {
  return (
    <NavBurger isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </NavBurger>
  );
};
Burger.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  open: bool.isRequired,
  setOpen: func.isRequired
};

export const BurgerNav = ({ isOpen }) => {
  const [show, setShow] = useState();
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const login = useCallback(
    ({ email, password }) => dispatch(dispatchLogin(email, password)),
    [dispatch]
  );

  return (
    <BurgerMenu isOpen={isOpen}>
      <Link to="/">Home</Link>
      <Link to="/landlord">Landlords</Link>
      <Link to="/tenant">Renters</Link>
      <Link to="/features">Features and Pricing</Link>
      <Link to="/contact">Contact</Link>
      <button type="button" onClick={() => setShow(!show)}>
        <Avi width={25} height={25} name="avatar" />
      </button>
    </BurgerMenu>
  );
};

BurgerNav.propTypes = {
  isOpen: bool.isRequired
};
