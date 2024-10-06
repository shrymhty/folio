import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar"> 
    <ul className="navbar-menu">
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#work">Work</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;
