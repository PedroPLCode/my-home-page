import styles from './HamburgerMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import clsx from 'clsx';


const HamburgerMenu = () => {

  const [show, setShow] = useState(false);

  const menuOnClick = () =>  {
    document.getElementById("menuBar").classList.toggle('change');
    document.getElementById("nav").classList.toggle('change');
    document.getElementById("menuBg").classList.toggle('changeBg');
    setShow(!show);
  };
      
  return (


<>
<div className={styles.menu} id="menu">
  <div className={clsx(styles.menuBar, show ? styles.change : '')} id="menuBar" onClick={menuOnClick}>
    <div id="bar1" className={clsx(styles.bar, styles.bar1)}></div>
    <div id="bar3" className={clsx(styles.bar, styles.bar2)}></div>
    <div id="bar3" className={clsx(styles.bar, styles.bar3)}></div>
  </div>
  <nav className={clsx(styles.nav, show ? styles.change : '')} id="nav">
  <Nav className="d-flex flex-column justify-content-center align-items-center"><Nav.Link as={NavLink} to="/" className={styles.nav_link} >
            &lt;home&gt; 
          </Nav.Link>
      <Nav.Link as={NavLink} to="/about" className={styles.nav_link} >
            &lt;about&gt; 
          </Nav.Link>         <Nav.Link as={NavLink} to="/portfolio" className={styles.nav_link} >
            &lt;portfolio&gt; 
          </Nav.Link></Nav>
  </nav> 
</div>

<div className={clsx(styles.menuBg, show ? styles.changeBg : '')} id="menuBg"></div>
</>
)
}

export default HamburgerMenu
