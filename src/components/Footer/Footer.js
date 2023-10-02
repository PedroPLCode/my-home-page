import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Envelope, Telephone, Instagram, Linkedin, Github} from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <MDBFooter className='bg-primary text-center text-white mt-3 fixed-bottom opacity-75'>
      <MDBContainer className='p-3 d-flex flex-row justify-content-end align-items-center gap-3'>
        <Link to='https://github.com/PedroPLCode/' >
          <Linkedin color="white" size={32}/> 
        </Link>
        <Link to='https://github.com/PedroPLCode/' >
          <Github color="white" size={32}/> 
        </Link>
        <Link to='https://github.com/PedroPLCode/' >
          <Instagram color="white" size={32}/> 
        </Link>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;