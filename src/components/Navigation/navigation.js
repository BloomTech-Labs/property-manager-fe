import React, { useState, useCallback, useRef } from 'react';
import { Link, navigate } from '@reach/router';
import { FocusOn } from 'react-focus-on';
import { useDispatch } from 'react-redux';
import { Breakpoint } from 'react-socks';
import { bool, func } from 'prop-types';
import { NavBurger, BurgerMenu } from '../UI';
import logo from '../../assets/img/logo.png';
import { ReactComponent as Avi } from '../../assets/img/user-solid.svg';
// import LoginForm from 'LoginForm/LoginForm';
import { auth } from '../../store/actions';
import useOnClickOutside from '../../hooks/index';
import AuthFlip from '../Auth/AuthFlip';

const dispatchLogin = auth('https://pt6-propman.herokuapp.com/api/auth/login');
const signup = auth('https://pt6-propman.herokuapp.com/api/auth/register');

export const HorNav = () => {
  const [show, setShow] = useState();
  const [isOpen, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
  const dispatch = useDispatch();

  const login = useCallback(
    ({ email, password }) => dispatch(dispatchLogin(email, password)),
    [dispatch]
  );

  const signupFn = useCallback(
    ({ email, password }) =>
      dispatch(signup(email, password))
        .then(() => navigate('/dashboard'))
        .catch(err => console.error(err)),
    [dispatch]
  );

  return (
    <>
      <Breakpoint desktop only>
        <nav className="nav-top">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/landlord">
                Landlords
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/tenant">
                Renters
              </Link>
            </li>
            <li>
              <Link className="logo-link" to="/">
                <img className="nav-logo" src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/features">
                Features and Pricing
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <button
                className="modal-btn"
                type="button"
                onClick={() => setShow(!show)}
              >
                <Avi className="avatar" width={25} height={25} name="avatar" />
              </button>
            </li>
          </ul>
          {show ? (
            <FocusOn
              onClickOutside={() => setShow(!show)}
              onEscapeKey={() => setShow(!show)}
            >
              <AuthFlip
                loginSubmit={login}
                show={show}
                setShow={setShow}
                signupFn={signupFn}
              />
            </FocusOn>
          ) : null}
        </nav>
      </Breakpoint>
      <Breakpoint tablet only>
        <nav className="nav-top">
          <ul>
            <li>
              <Link to="/landlord">Landlords</Link>
            </li>
            <li>
              <Link to="/tenant">Renters</Link>
            </li>
            <li>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link to="/features">Features and Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <button
                className="modal-btn"
                type="button"
                onClick={() => setShow(!show)}
              >
                <Avi className="avatar" width={25} height={25} name="avatar" />
              </button>
            </li>
          </ul>
          {/* {show ? <AuthFlip loginSubmit={login} /> : null} */}
        </nav>
      </Breakpoint>
      <Breakpoint mobile only>
        <nav className="nav-top" ref={node}>
          <Burger isOpen={isOpen} setOpen={setOpen} />
          <div style={{ position: 'relative' }}>
            <BurgerNav isOpen={isOpen} setOpen={setOpen} />
          </div>
        </nav>
      </Breakpoint>
    </>
  );
};

export const VertNav = () => {
  return (
    <nav className="nav-side">
      <ul>
        <li>
          <Link className="profile" to="profile">
            <Avi width={75} height={75} name="avatar" />
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
  isOpen: bool.isRequired,
  setOpen: func.isRequired
};

export const BurgerNav = ({ isOpen, setOpen }) => {
  // const [show, setShow] = useState();
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const login = useCallback(
    ({ email, password }) => dispatch(dispatchLogin(email, password)),
    [dispatch]
  );

  return (
    <BurgerMenu isOpen={isOpen}>
      <Link to="/" onClick={() => setOpen(!isOpen)}>
        Home
      </Link>
      <Link to="/landlord" onClick={() => setOpen(!isOpen)}>
        Landlords
      </Link>
      <Link to="/tenant" onClick={() => setOpen(!isOpen)}>
        Renters
      </Link>
      <Link to="/features" onClick={() => setOpen(!isOpen)}>
        Features and Pricing
      </Link>
      <Link to="/contact" onClick={() => setOpen(!isOpen)}>
        Contact
      </Link>
      <Link to="/login" onClick={() => setOpen(!isOpen)}>
        Login
      </Link>
    </BurgerMenu>
  );
};

BurgerNav.propTypes = {
  isOpen: bool.isRequired,
  setOpen: func.isRequired
};
export default HorNav;
