import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ContactCanvas from '../../features/ContactCanvas/ContactCanvas';
import styles from './NavBar.module.scss'; 
import HamburgerMenu from '../../features/HamburgerMenu/HamburgerMenu';

const NavBar = () => {
  return (
    <Navbar variant="dark" sticky="top" className="mb-3 text-black opacity-75">
      <Container className='d-flex d-row justify-content-between align-items-start'>
        <HamburgerMenu />
        <Navbar.Brand href="/" className={styles.navbar_brand}>
          <p>&lt;piotr.gaszczyński&gt;&lt;/frontend developer&gt; </p>
        </Navbar.Brand>
        <Nav className="d-flex d-row justify-content-between align-items-center">
          <Nav.Link as={NavLink} to="/" className={styles.nav_link} >
            &lt;home&gt; 
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className={styles.nav_link} >
            &lt;about&gt; 
          </Nav.Link>
          <Nav.Link as={NavLink} to="/portfolio" className={styles.nav_link} >
            &lt;portfolio&gt; 
          </Nav.Link>
          <ContactCanvas />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;