import Col from 'react-bootstrap/Col';
import styles from './AboutMePage.module.scss';

const AboutMePage = () => {

  return (
    <Col className={styles.about_me_page}>        
      <h3>AboutMePage component</h3>
      <h5>Ludzie twardo stąpający po ziemi nie chcą wierzyć, że przed półwieczem wydarzyło się dla Ziemi coś tak niezwykłego. Otóż pół wieku temu człowiek postawił nogę na Księżycu. Kiedy wieczorem spoglądamy na rozgwieżdżone niebo z sierpem księżyca, trudno wręcz przypuszczać, że można po nim chodzić. W naszej wyobraźni tylko legendarny Mistrz Twardowski, zwany polskim Faustem, wylądował tam na kogucie i już pozostał. Poświęcono mu bez mała trzydzieści utworów, filmów, performance’ów, a nawet grę komputerową. Na Księżyc latali bohaterowie książek i filmów science fiction. </h5>
    </Col>
  );
}
    
export default AboutMePage;