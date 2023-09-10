import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/"><i className="fa fa-tasks"></i></Link>
      <ul>
      <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;