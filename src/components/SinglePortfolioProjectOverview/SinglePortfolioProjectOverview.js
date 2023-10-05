import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './SinglePortfolioProjectOverview.module.scss';

const SinglePortfolioProjectOverview = props => {
    
  return (
    <li>
      <h3>{props.name}</h3>
      <h5>{props.techs}</h5>
      <Link to={props.link}>
      see more
      </Link>
    </li>
  );
}

export default SinglePortfolioProjectOverview;