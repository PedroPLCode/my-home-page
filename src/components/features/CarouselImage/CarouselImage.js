//import { Envelope, Telephone, Instagram, Linkedin, Github, ArrowRight} from 'react-bootstrap-icons';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import { Link } from 'react-router-dom';
//import { Container } from 'react-bootstrap';
//import portfolioDetails from '../../../portfolioDetails.js';
//import { clsx } from 'clsx';
import styles from './CarouselImage.module.scss';

const CarouselImage = props => {

  return (      
    <div className={styles.carousel_image}>
      <h3>{props.name}</h3>
      <h3>{props.desc}</h3>
    </div>
  );
}
    
export default CarouselImage;