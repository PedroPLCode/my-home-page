import { Envelope, Telephone, Instagram, Linkedin, Github} from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const AboutMePage = () => {

    return (
      <Col className='text-white'>        
        <h3>AboutMePage component</h3>
        <h5>Ludzie twardo stąpający po ziemi nie chcą wierzyć, że przed półwieczem wydarzyło się dla Ziemi coś tak niezwykłego. Otóż pół wieku temu człowiek postawił nogę na Księżycu. Kiedy wieczorem spoglądamy na rozgwieżdżone niebo z sierpem księżyca, trudno wręcz przypuszczać, że można po nim chodzić. W naszej wyobraźni tylko legendarny Mistrz Twardowski, zwany polskim Faustem, wylądował tam na kogucie i już pozostał. Poświęcono mu bez mała trzydzieści utworów, filmów, performance’ów, a nawet grę komputerową. Na Księżyc latali bohaterowie książek i filmów science fiction. </h5>
        <p>O próbie kolonizacji ziemskiego satelity traktuje trylogia Jerzego Żuławskiego „Na srebrnym globie” sprzed ponad stu lat. Po więcej niż półwieczu jego stryjeczny wnuk, Andrzej Żuławski nakręcił film pod tym samym tytułem. A niespełna dwadzieścia lat wcześniej wielki krok dla ludzkości zrobił Neil Armstrong, stawiając stopę na Księżycu. Trzej astronauci polecieli statkiem Apollo 11 w roku 1969, by spełnić marzenie ludzkości. Znamy wszak wszyscy minitrylogię „Wokół Księżyca” pioniera prozy fantastycznonaukowej,  Juliusza Verne’a. Dokładnie w stulecie pierwodruku powieści marzenie Ziemian się ziściło. Kilkadziesiąt lat po Vernie francuski reżyser, Georges Méliès przedstawił wyobrażenie Księżyca w filmie „Podróż na Księżyc”. Ale wtedy taka podróż była jeszcze mirażem i mrzonką.</p>
        <Row>
          <Col className='d-flex flex-row justify-content-end align-items-center'>
            <Instagram color="royalblue" size={32}/> 
          </Col>
          <Col className='d-flex flex-row justify-content-start align-items-center'>
            <Link to='https://www.linkedin.com/'>My profile on instagram</Link>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex flex-row justify-content-end align-items-center'>
            <Linkedin color="royalblue" size={32}/> 
          </Col>
          <Col className='d-flex flex-row justify-content-start align-items-center'>
            <Link to='https://www.linkedin.com/'>My profile on LinkedIn</Link>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex flex-row justify-content-end align-items-center' xs={6}>
            <Github color="royalblue" size={32}/> 
          </Col>
          <Col className='d-flex flex-row justify-content-start align-items-center' xs={6}>
            <Link to='https://github.com/PedroPLCode'>My profile on GitHub</Link>
          </Col>
        </Row>
      </Col>
    );
  }
    
  export default AboutMePage;