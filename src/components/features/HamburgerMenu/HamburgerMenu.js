import styles from './HamburgerMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useState } from 'react';
import clsx from 'clsx';

const HamburgerMenu = props => {

  const menuOnClick = () =>  {
    document.getElementById("menuBar").classList.toggle('change');
    document.getElementById("nav").classList.toggle('change');
    document.getElementById("menuBg").classList.toggle('changeBg');
    props.setShowNavMenu(!props.showNavMenu);
  }
      
  return (
    <div>
      <div className={styles.menu} id="menu" >
        <div className={clsx(styles.menuBar, props.showNavMenu ? styles.change : '')} id="menuBar" onClick={menuOnClick} >
          <div id="bar1" className={clsx(styles.bar, styles.bar1, props.showNavMenu ? styles.change : '')}></div>
          <div id="bar3" className={clsx(styles.bar, styles.bar2, props.showNavMenu ? styles.change : '')}></div>
          <div id="bar3" className={clsx(styles.bar, styles.bar3, props.showNavMenu ? styles.change : '')}></div>
        </div>
        <nav className={clsx(styles.nav, props.showNavMenu ? styles.change : '')} id="nav">
          <Nav className="" onClick={props.closeHamburger}>
            <Nav.Link as={NavLink} to="/" className={styles.nav_link} >
              home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={styles.nav_link} >
              about
            </Nav.Link>         
            <Nav.Link as={NavLink} to="/portfolio" className={styles.nav_link} >
              portfolio
            </Nav.Link>
          </Nav>
        </nav> 
      </div>
      <div className={clsx(styles.menuBg, props.showNavMenu ? styles.changeBg : '')} id="menuBg" ></div>
    </div>
  )
}

export default HamburgerMenu;
