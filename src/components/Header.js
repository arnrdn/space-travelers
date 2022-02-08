import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styling/Header.css';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      title: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      title: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      title: 'My Profile',
    },
  ];

  return (
    <header>
      <div className="logo-corner">
        <img className="logo-img" src={logo} alt="Space Travelers&apos; Hub" />
        <h1 className="logo">Space Travelers&apos; Hub</h1>
      </div>
      <nav>
        <ul className="nav-menu">
          {
            links.map((link) => (
              <li className="nav-items" key={link.id}>
                <NavLink to={link.path}>{link.title}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
