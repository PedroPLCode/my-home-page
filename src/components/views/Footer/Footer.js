import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Github} from 'react-bootstrap-icons';
import styles from './Footer.module.scss';
import clsx from 'clsx';

const Footer = props => {

  return (
    <MDBFooter className={styles.footer}>
      <MDBContainer className={styles.footer__container}>
        <h4 className={clsx(styles.footer__text, props.linkedInIconHover ? styles.footer__text__active : '')}>See my LinkedIn profile</h4>
        <h4 className={clsx(styles.footer__text, props.githubIconHover ? styles.footer__text__active : '')}>See my GitHub profile</h4>
        <h4 className={clsx(styles.footer__text, props.instagramIconHover ? styles.footer__text__active : '')}>See my Instagram profile</h4>
        <Link to='https://www.linkedin.com/in/piotr-gaszczynski/' 
              target="_blank" 
              onMouseEnter={props.changeLinkedInTextOn} 
              onMouseLeave={props.changeLinkedInTextOff}>
          <Linkedin className={styles.footer__icon}/> 
        </Link>
        <Link to='https://github.com/PedroPLCode/' 
              target="_blank" 
              onMouseEnter={props.changeGithubTextOn} 
              onMouseLeave={props.changeGithubTextOff} >
          <Github  className={styles.footer__icon}/> 
        </Link>
        <Link to='https://github.com/PedroPLCode/' 
              target="_blank" 
              onMouseEnter={props.changeInstagramTextOn} 
              onMouseLeave={props.changeInstagramTextOff} >
          <Instagram className={styles.footer__icon}/> 
        </Link>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;