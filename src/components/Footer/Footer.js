import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Github} from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <MDBFooter className='mt-3 fixed-bottom opacity-75'>
      <MDBContainer className='p-3 d-flex flex-row justify-content-end align-items-center gap-3'>
        <Link to='https://github.com/PedroPLCode/' target="_blank" >
          <Linkedin className='footer-icon'/> 
        </Link>
        <Link to='https://github.com/PedroPLCode/' target="_blank" >
          <Github  className='footer-icon'/> 
        </Link>
        <Link to='https://github.com/PedroPLCode/' target="_blank" >
          <Instagram className='footer-icon'/> 
        </Link>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;