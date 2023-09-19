import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" sticky="top" className="mb-3">
      <Container>
        <Navbar.Brand href="/">Flight Search App</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link as={NavLink} to="/">
            Input
          </Nav.Link>
          <Nav.Link as={NavLink} to="/output">
            Output
          </Nav.Link>
          <Nav.Link as={NavLink} to="/pagenotfound">
            NotFound
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;