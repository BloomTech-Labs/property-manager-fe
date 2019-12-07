import React, { useState, useCallback, useRef } from 'react';
import { Link, navigate } from '@reach/router';
// eslint-disable-next-line import/no-unresolved
import { FocusOn } from 'react-focus-on';
import { useDispatch } from 'react-redux';
import { Breakpoint } from 'react-socks';
import { TopNav } from '../UI/index';
import { BurgerNav, Burger } from './VerticalNav';
import logo from '../../assets/img/logo100.png';
import { ReactComponent as Avi } from '../../assets/img/user-solid.svg';
import { auth } from '../../store/actions';
import { useOnClickOutside } from '../../hooks/index';
import AuthFlip from '../Auth/AuthFlip';

const dispatchLogin = auth('https://pt6-propman.herokuapp.com/api/auth/login');
const signup = auth('https://pt6-propman.herokuapp.com/api/auth/register');

const HorNav = () => {
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
        // eslint-disable-next-line no-console
        .catch(err => console.error(err)),
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
            <button
              className="modal-btn"
              type="button"
              onClick={() => setShow(!show)}
            >
              <Avi className="avatar" width={25} height={25} name="avatar" />
            </button>
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
            <button
              className="modal-btn"
              type="button"
              onClick={() => setShow(!show)}
            >
              <Avi className="avatar" width={25} height={25} name="avatar" />
            </button>
          </ul>
          {/* {show ? <AuthFlip loginSubmit={login} /> : null} */}
        </TopNav>
      </Breakpoint>
      <Breakpoint mobile only>
        <TopNav ref={node}>
          <Burger isOpen={isOpen} setOpen={setOpen} />
          <div style={{ position: 'relative' }}>
            <BurgerNav isOpen={isOpen} setOpen={setOpen} />
          </div>
        </TopNav>
      </Breakpoint>
    </div>
  );
};

export default HorNav;
