import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" sticky="top" className="mb-3">
      <Container>
        <Navbar.Brand href="/">Piotr Gaszczyński</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link as={NavLink} to="/">
            Main Page
          </Nav.Link>
          <Nav.Link as={NavLink} to="/aboutme">
            About Me
          </Nav.Link>
          <Nav.Link as={NavLink} to="/portfolio">
            My Portfolio
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact me
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;