import { Envelope, Telephone, Instagram, Linkedin, Github, ArrowRight} from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const PortfolioPage = () => {

    return (
      <Container className="full-height d-flex flex-column justify-content-center align-items-center">
        <h3>PortfolioPage component</h3>
        <h5>My projects..</h5>
        <Row>
            <Col>
              Waiter App
            </Col>
          <Col>
            <Link to='waiterapp' className='portfolio-link'>
              see more
            </Link>
          </Col>       
        </Row>
      </Container>
    );
  }
    
  export default PortfolioPage;