import React from 'react';
import { TopNav } from './ui/index';
import logo from '../assets/img/logo.png';

const HorNav = () => {
  return (
    <TopNav>
      <ul>
        <a href="#home">Home</a>
        <a href="#landlords">Landlords</a>
        <a href="#renters">Renters</a>
        <img src = {logo}></img>
        <a href="#features">Features and Pricing</a>
        <a href="#contact">Contact</a>
      </ul>
    </TopNav>
  );
};

export default HorNav;
