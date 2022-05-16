import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../assets/images/logo.png')}  alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/Events' activeStyle>
            Explore Events
          </NavLink>
          <NavLink to='/chalendar' activeStyle>
            Chalender
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/login' activeStyle>
            Log in
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;