//import { Envelope, Telephone, Instagram, Linkedin, Github, ArrowRight} from 'react-bootstrap-icons';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import { Link } from 'react-router-dom';
//import SinglePortfolioProjectOverview from '../../features/SinglePortfolioProjectOverview/SinglePortfolioProjectOverview';
//import portfolioDetails from '../../../portfolioDetails.js';
import { clsx } from 'clsx';
import { Container } from 'react-bootstrap';
import PortfolioCarousel from '../../features/PortfolioCarousel/PortfolioCarousel';
import styles from './PortfolioPage.module.scss';
import PortfolioList from '../../features/PortfolioList/PortfolioList';

const PortfolioPage = () => {

    return (
      <Container className={clsx(styles.portfolio_page)}>
        <PortfolioList />
      </Container>
    );
  }
    
  export default PortfolioPage;