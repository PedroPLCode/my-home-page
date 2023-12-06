import { clsx } from 'clsx';
import { Container } from 'react-bootstrap';
import styles from './PortfolioPage.module.scss';
import PortfolioList from '../../features/PortfolioList/PortfolioList';

const PortfolioPage = props => {

  return (
    <Container className={clsx(styles.portfolio__page)}>
      <PortfolioList setShowNavMenu={props.setShowNavMenu} closeHamburger={props.closeHamburger} showNavMenu={props.showNavMenu} />
    </Container>
  );
}
    
export default PortfolioPage;