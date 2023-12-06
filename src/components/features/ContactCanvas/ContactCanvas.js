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
    <div className={styles.contact}>      
      <h3 onClick={handleShow} className={styles.contact__link}>
        contact
      </h3>

      <Offcanvas show={show} placement='end' 
                 onHide={handleClose} 
                 className={styles.offcanvas} 
                 style={{background: 'rgba(0, 0, 0, 0.5)'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=''>
          <h5>&lt;person&gt;</h5>
          <h6>piotr gaszczyński</h6>
          <h6>frontend developer</h6>
          <h5>&lt;/person&gt;</h5>
          <h5 className=''>&lt;contact&gt;</h5>
          <div className={styles.contact_link}> 
            <a href='mailto:piotrek.gaszczynski@gmail.com'><i>&lt;mailto=piotrek.gaszczynski@gmail.com&gt;</i></a>
          </div>
          <div className={styles.contact_link}>
            <a href='tel:48605208772'><i>&lt;callto=(+48)605208772&gt;</i></a>
          </div>
          <h5>&lt;/contact&gt;</h5>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ContactCanvas;