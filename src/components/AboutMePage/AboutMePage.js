import { Envelope, Telephone, Instagram, Linkedin, Github} from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const AboutMePage = () => {

    return (
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <h3>AboutMePage component</h3>
        <h5>about me informatioms</h5>
        <Row className="justify-content-center align-items-center gap-2">
          <Col>
            <Instagram color="royalblue" size={32}/> 
          </Col>
          <Col>
            <Link to='https://www.linkedin.com/'>My profile on instagram</Link>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center gap-2">
          <Col>
            <Linkedin color="royalblue" size={32}/> 
          </Col>
          <Col>
            <Link to='https://www.linkedin.com/'>My profile on LinkedIn</Link>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center gap-2">
          <Col>
            <Github color="royalblue" size={32}/> 
          </Col>
          <Col>
            <Link to='https://github.com/PedroPLCode'>My profile on GitHub</Link>
          </Col>
        </Row>
      </Col>
    );
  }
    
  export default AboutMePage;