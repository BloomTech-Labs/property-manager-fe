import React, { useState } from 'react';
import { TopNav, SideNav } from './UI/index';
import logo from '../assets/img/logo100.png';
import { ReactComponent as Avi } from '../assets/img/user-solid.svg';
import LoginForm from './LoginForm/LoginForm';

export const HorNav = () => {
  const [show, setShow] = useState();

  return (
    <TopNav>
      <ul>
        <a href="/">Home</a>
        <a href="#landlords">Landlords</a>
        <a href="#renters">Renters</a>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <a href="#features">Features and Pricing</a>
        <a href="#contact">Contact</a>
        <button type="button" onClick={() => setShow(!show)}>
          <Avi width={25} height={25} name="avatar" />
        </button>
      </ul>
      {show ? <LoginForm submit={console.log} /> : null}
    </TopNav>
  );
};

export const VertNav = () => {
  return (
    <SideNav>
      <ul>
        <a href="#login">
          <Avi width={25} height={25} name="avatar" />
        </a>
        <a href="/">Home</a>
        <a href="#landlords">Landlords</a>
        <a href="#renters">Renters</a>
        <a href="#features">Features and Pricing</a>
        <a href="#contact">Contact</a>
      </ul>
    </SideNav>
  );
};
