import React from 'react';
import { TopNav } from './ui/index';
import logo from '../assets/img/logo100.png';
import {ReactComponent as Avi} from '../assets/img/user-solid.svg';

const HorNav = () => {
  return (
    <TopNav>
      <ul>
        <a href="#home">Home</a>
        <a href="#landlords">Landlords</a>
        <a href="#renters">Renters</a>
        <img src = {logo} alt = 'logo'></img>
        <a href="#features">Features and Pricing</a>
        <a href="#contact">Contact</a>
        <Avi  width = {25} height = {25} name = 'avatar'/>
      </ul>
    </TopNav>
  );
};

export default HorNav;
