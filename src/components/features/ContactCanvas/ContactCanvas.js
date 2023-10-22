//import Button from 'react-bootstrap/Button';
//import Navbar from 'react-bootstrap/Navbar';
//import { Nav, Container } from 'react-bootstrap';
//import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './ContactCanvas.module.scss';

const ContactCanvas = props => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    props.closeHamburger();
  }

  return (
    <>      
      <h3 onClick={handleShow} className={styles.nav_link} onMouseEnter={props.changeBackgroundTextOn} onMouseLeave={props.changeBackgroundTextOff} >
        <span className={styles.before}>&lt;contact&gt;</span><span className={styles.after}>&lt;click&gt;</span> 
      </h3>

      <Offcanvas show={show} placement='end' onHide={handleClose} className={styles.offcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex flex-column justify-content-center align-items-center'>
          <h5>&lt;person&gt;</h5>
          <h6>piotr gaszczyński</h6>
          <h6>frontend developer</h6>
          <h5>&lt;/person&gt;</h5>
          <h5 className='mt-4'>&lt;contact&gt;</h5>
          <div className="d-flex flex-row justify-content-center align-items-center"> 
            <a href='mailto:piotrek.gaszczynski@gmail.com'>&lt;mailto=piotrek.gaszczynski@gmail.com&gt;</a>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-end">
            <a href='tel:48605208772'>&lt;callto=(+48)605208772&gt;</a>
          </div>
          <h5>&lt;/contact&gt;</h5>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ContactCanvas;