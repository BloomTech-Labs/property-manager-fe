import React from 'react';
import { TopNav, SideNav } from './ui/index';
import logo from '../assets/img/logo100.png';
import { ReactComponent as Avi } from '../assets/img/user-solid.svg';

export const HorNav = () => {
  return (
    <TopNav>
      <ul>
        <a href="/">Home</a>
        <a href="#landlords">Landlords</a>
        <a href="#renters">Renters</a>
        <a href="/">
          <img src={logo} alt="logo"></img>
        </a>
        <a href="#features">Features and Pricing</a>
        <a href="#contact">Contact</a>
        <a href="/dash">
          <Avi width={25} height={25} name="avatar" />
        </a>
      </ul>
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
