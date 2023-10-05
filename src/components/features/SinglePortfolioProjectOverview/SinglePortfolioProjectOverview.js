import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './SinglePortfolioProjectOverview.module.scss';

const SinglePortfolioProjectOverview = props => {
    
  return (
    <li className="p-3">
      <h5>{props.name}</h5>
      <h6>{props.techs}</h6>
      <Link to={props.link}>
      see more
      </Link>
    </li>
  );
}

export default SinglePortfolioProjectOverview;