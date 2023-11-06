import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ContactCanvas from '../../features/ContactCanvas/ContactCanvas';
import styles from './NavBar.module.scss'; 
import HamburgerMenu from '../../features/HamburgerMenu/HamburgerMenu';
import clsx from 'clsx';

const NavBar = props => {

  return (
    <Navbar variant="dark" sticky="top" className={styles.nav}>
      <Container className={styles.nav__container}>
        <HamburgerMenu showNavMenu={props.showNavMenu} setShowNavMenu={props.setShowNavMenu} closeHamburger={props.closeHamburger} changeBackgroundGradientOn={props.changeBackgroundGradientOn} changeBackgroundGradientOff={props.changeBackgroundGradientOff} />
        <ContactCanvas closeHamburger={props.closeHamburger} />
      </Container>
    </Navbar>
  );
};

export default NavBar;