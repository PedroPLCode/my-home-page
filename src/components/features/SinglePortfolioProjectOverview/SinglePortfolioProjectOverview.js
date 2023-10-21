import { Link } from 'react-router-dom';
//import clsx from 'clsx';
import styles from './SinglePortfolioProjectOverview.module.scss';
import clsx from 'clsx';

const SinglePortfolioProjectOverview = props => {
    
  return (
    <Link to={props.link} className={clsx("p-3 d-flex flex-column justify-content-center align-items-center", styles.project_overview)}>
        <h5>{props.name}</h5>
        <h6>{props.techs}</h6>
    </Link>
  );
}

export default SinglePortfolioProjectOverview;