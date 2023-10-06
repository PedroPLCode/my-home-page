import { Envelope, Telephone, Instagram, Linkedin, Github} from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { clsx } from 'clsx';
import styles from './AboutMePage.module.scss';
import AccordionItem from '../../features/AccordionItem/AccordionItem';

const AboutMePage = () => {

    return (
      <Col className={styles.about_me_page}>        
        <h3>AboutMePage component</h3>
        <h5>Ludzie twardo stąpający po ziemi nie chcą wierzyć, że przed półwieczem wydarzyło się dla Ziemi coś tak niezwykłego. Otóż pół wieku temu człowiek postawił nogę na Księżycu. Kiedy wieczorem spoglądamy na rozgwieżdżone niebo z sierpem księżyca, trudno wręcz przypuszczać, że można po nim chodzić. W naszej wyobraźni tylko legendarny Mistrz Twardowski, zwany polskim Faustem, wylądował tam na kogucie i już pozostał. Poświęcono mu bez mała trzydzieści utworów, filmów, performance’ów, a nawet grę komputerową. Na Księżyc latali bohaterowie książek i filmów science fiction. </h5>
        <AccordionItem />
      </Col>
    );
  }
    
  export default AboutMePage;