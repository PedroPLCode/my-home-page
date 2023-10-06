import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Github} from 'react-bootstrap-icons';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <MDBFooter className='mt-3 fixed-bottom opacity-75'>
      <MDBContainer className='p-3 d-flex flex-row justify-content-end align-items-center gap-3'>
        <Link to='https://github.com/PedroPLCode/' target="_blank" >
          <Linkedin className={styles.footer_icon}/> 
        </Link>
        <Link to='https://github.com/PedroPLCode/' target="_blank" >
          <Github  className={styles.footer_icon}/> 
        </Link>
        <Link to='https://github.com/PedroPLCode/' target="_blank" >
          <Instagram className={styles.footer_icon}/> 
        </Link>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;