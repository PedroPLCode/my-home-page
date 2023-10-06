import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './ContactCanvas.module.scss';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function ContactCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>      
      <h3 onClick={handleShow} className={styles.nav_link} >
        &lt;contact&gt; 
      </h3>

      <Offcanvas show={show} onHide={handleClose} className={styles.offcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>&lt;person&gt;</h5>
          <h6>piotr gaszczyński</h6>
          <h6>frontend developer</h6>
          <h5>&lt;/person&gt;</h5>
          <h5>&lt;contact&gt;</h5>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2"> 
            <a href='mailto:piotrek.gaszczynski@gmail.com'>&lt;mailto=piotrek.gaszczynski@gmail.com&gt;</a>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-end gap-2">
            <a href='tel:48605208772'>&lt;callto=(+48)605208772&gt;</a>
          </div>
          <h5>&lt;/contact&gt;</h5>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ContactCanvas;