import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ContactCanvas from '../../features/ContactCanvas/ContactCanvas';
import styles from './NavBar.module.scss'; 
import HamburgerMenu from '../../features/HamburgerMenu/HamburgerMenu';
import clsx from 'clsx';

const NavBar = props => {

  const [showNavMenu, setShowNavMenu] = useState(false);

  const closeHamburger = () => {
    if (showNavMenu) {
      setShowNavMenu(!showNavMenu);
    }
  }

  return (
    <Navbar variant="dark" sticky="top" className={styles.nav}>
      <Container className={styles.nav__container}>
        <HamburgerMenu showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu} closeHamburger={closeHamburger} changeBackgroundGradientOn={props.changeBackgroundGradientOn} changeBackgroundGradientOff={props.changeBackgroundGradientOff} />
        <ContactCanvas closeHamburger={closeHamburger} />
      </Container>
    </Navbar>
  );
};

export default NavBar;