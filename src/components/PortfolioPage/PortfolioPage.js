import { Envelope, Telephone, Instagram, Linkedin, Github, ArrowRight} from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const PortfolioPage = () => {

    return (
      <Container className="d-flex flex-column text-white justify-content-center align-items-center">
        <h3>PortfolioPage component</h3>
        <h5>My projects..</h5>
        <Row>
          <Col>
            Waiter App
          </Col>
          <Col>
            <Link to='https://github.com/PedroPLCode/16.waiter-app'>
              <Github color="royalblue" size={32}/> 
            </Link>
          </Col>
          <Col>
            <Link to='https://github.com/PedroPLCode/16.waiter-app'>
              <ArrowRight color="royalblue" size={32}/> 
            </Link>
          </Col>          
        </Row>
        <Row>
          <Col>
            Waiter App
          </Col>
          <Col>
            <Link to='https://github.com/PedroPLCode/16.waiter-app'>
              <Github color="royalblue" size={32}/> 
            </Link>
          </Col>
          <Col>
            <Link to='https://github.com/PedroPLCode/16.waiter-app'>
              <ArrowRight color="royalblue" size={32}/> 
            </Link>
          </Col>          
        </Row>
        <Row>
          <Col>
            Waiter App
          </Col>
          <Col>
            <Link to='https://github.com/PedroPLCode/16.waiter-app'>
              <Github color="royalblue" size={32}/> 
            </Link>
          </Col>
          <Col>
            <Link to='https://github.com/PedroPLCode/16.waiter-app'>
              <ArrowRight color="royalblue" size={32}/> 
            </Link>
          </Col>          
        </Row>
        <Row>
          <Col>
            Waiter App
          </Col>
          <Col>
            <Link to='https://github.com/PedroPLCode/16.waiter-app'>
              <Github color="royalblue" size={32}/> 
            </Link>
          </Col>
          <Col>
            <Link to='https://github.com/PedroPLCode/16.waiter-app'>
              <ArrowRight color="royalblue" size={32}/> 
            </Link>
          </Col>          
        </Row>
        <Row>
          <Col>
            Waiter App
          </Col>
          <Col>
            <Link to='https://github.com/PedroPLCode/16.waiter-app'>
              <Github color="royalblue" size={32}/> 
            </Link>
          </Col>
          <Col>
            <Link to='https://github.com/PedroPLCode/16.waiter-app'>
              <ArrowRight color="royalblue" size={32}/> 
            </Link>
          </Col>          
        </Row>
      </Container>
    );
  }
    
  export default PortfolioPage;