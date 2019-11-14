import React, { useState } from 'react';
import { TopNav, SideNav } from './UI/index';
import {Link} from '@reach/router'
import logo from '../assets/img/logo100.png';
import { ReactComponent as Avi } from '../assets/img/user-solid.svg';
import LoginForm from './LoginForm/LoginForm';

export const HorNav = () => {
  const [show, setShow] = useState();

  return (
    <TopNav>
      <ul>
        <Link to ="/">Home</Link>
        <Link to ="/landlord">Landlords</Link>
        <Link to ="/tenant">Renters</Link>
        <Link to ="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to ="/features">Features and Pricing</Link>
        <Link to ="/contact">Contact</Link>
        <button type = 'button' onClick = {() => setShow(!show)}>
          <Avi width={25} height={25} name="avatar" />
        </button>
      </ul>
      {show ? <LoginForm submit = {console.log} /> : null}
    </TopNav>
  );
};

export const VertNav = () => {
  return (
    <SideNav>
      <ul>
        <Link to ="#login">
          <Avi width={25} height={25} name="avatar" />
        </Link>
        <Link to ="/">Home</Link>
        <Link to ="/landlord">Landlords</Link>
        <Link to ="/tenant">Renters</Link>
        <Link to ="/features">Features and Pricing</Link>
        <Link to ="/contact">Contact</Link>
      </ul>
    </SideNav>
  );
};
