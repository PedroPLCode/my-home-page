import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar variant="dark" sticky="top" className="mb-3 text-black opacity-75">
      <Container className='d-flex d-row justify-content-between align-items-start'>
        <Navbar.Brand href="/">
          <p>&lt;piotr.gaszczyński&gt;&lt;/frontend developer&gt; </p>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link as={NavLink} to="/" >
            &lt;home&gt; 
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            &lt;about&gt; 
          </Nav.Link>
          <Nav.Link as={NavLink} to="/portfolio">
            &lt;portfolio&gt; 
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            &lt;contact&gt; 
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;