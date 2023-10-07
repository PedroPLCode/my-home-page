//import { Envelope, Telephone, Instagram, Linkedin, Github, ArrowRight} from 'react-bootstrap-icons';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import { Link } from 'react-router-dom';
//import { Container } from 'react-bootstrap';
//import { clsx } from 'clsx';
import SinglePortfolioProjectOverview from '../../features/SinglePortfolioProjectOverview/SinglePortfolioProjectOverview';
import portfolioDetails from '../../../portfolioDetails.js';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../CarouselImage/CarouselImage';
import styles from './PortfolioCarousel.module.scss';

const PortfolioCarousel = () => {

  return (      
    <Carousel className={styles.carousel}>
      {portfolioDetails.map(project => 
        <Carousel.Item interval={5000}>
          <CarouselImage key={project.name}
                         link={project.link}
                         name={project.name}
                         techs={project.techs}
                         desc={project.desc}
                         gitHubLink={project.githublink}
                         liveLink={project.livelink}
                          text="First slide" />
          <Carousel.Caption>
            <SinglePortfolioProjectOverview key={project.name}
                                            link={project.link}
                                            name={project.name}
                                            techs={project.techs}
                                            desc={project.desc}
                                            gitHubLink={project.githublink}
                                            liveLink={project.livelink} />
          </Carousel.Caption>
        </Carousel.Item>
      )}
    </Carousel>
  );
}
    
  export default PortfolioCarousel;