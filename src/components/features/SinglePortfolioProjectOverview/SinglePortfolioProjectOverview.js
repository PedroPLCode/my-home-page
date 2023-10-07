import { Link } from 'react-router-dom';
//import clsx from 'clsx';
import styles from './SinglePortfolioProjectOverview.module.scss';

const SinglePortfolioProjectOverview = props => {
    
  return (
    <div className="p-3">
      <h6>{props.techs}</h6>
      <Link to={props.link}>
      see more
      </Link>
    </div>
  );
}

export default SinglePortfolioProjectOverview;