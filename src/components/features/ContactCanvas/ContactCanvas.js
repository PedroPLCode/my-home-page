import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './ContactCanvas.module.scss';
import { TelephoneFill, EnvelopeFill } from 'react-bootstrap-icons';

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
        <Offcanvas.Header className={styles.offcanvas_header}>
          <Offcanvas.Title className={styles.offcanvas_title}>Contact details</Offcanvas.Title>
          <div className={styles.btn_close}>
            <h3 onClick={handleClose} className={styles.contact__link}>
              close
            </h3>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offcancas_body}>
          <h5>&lt;person&gt;</h5>
          <h6>piotr gaszczyński</h6>
          <h6>frontend developer</h6>
          <h5>&lt;/person&gt;</h5>
          <div className={styles.contact_link}> 
            <a href='mailto:piotrek.gaszczynski@gmail.com'>
              <EnvelopeFill className={styles.envelope} />
              <i>piotrek.gaszczynski@gmail.com</i>
            </a>
          </div>
          <div className={styles.contact_link}>
            <a href='tel:48605208772'>
              <TelephoneFill className={styles.telephone} />
              <i>+48 605208772</i>
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ContactCanvas;