import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <Link className={({ isActive }) => isActive ? styles.linkActive : undefined} to="https://github.com/PedroPLCode"><i className="fa fa-github"></i><i>pedro</i></Link>
    </nav>
  );
}

export default Footer;