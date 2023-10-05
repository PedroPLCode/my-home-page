import { Envelope, Telephone, Instagram, Linkedin, Github, ArrowRight} from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styles from './PortfolioPage.module.scss';
import SinglePortfolioProjectOverview from '../../features/SinglePortfolioProjectOverview/SinglePortfolioProjectOverview';
import portfolioDetails from '../../../portfolioDetails.js';
import { clsx } from 'clsx';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../../images/logo512.png';

const PortfolioPage = () => {

    return (
      <Container className={clsx("d-flex flex-column justify-content-center align-items-center", styles.portfolio_page)}>
        <h3>PortfolioPage component</h3>
        <h5>My projects..</h5>
      
      
        <Carousel>
          {portfolioDetails.map(project => 
            <Carousel.Item>
              <ExampleCarouselImage text="First slide" />
              <Carousel.Caption>
                <SinglePortfolioProjectOverview 
                  key={project.name}
                  link={project.link}
                  name={project.name}
                  techs={project.techs}
                  desc={project.desc}
                  gitHubLink={project.gitHubLink}
                  liveLink={project.liveLink}
                />
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>

        
      </Container>
    );
  }
    
  export default PortfolioPage;