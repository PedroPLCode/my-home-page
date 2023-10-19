import { Link } from 'react-router-dom';
//import clsx from 'clsx';
import styles from './SinglePortfolioProjectOverview.module.scss';

const SinglePortfolioProjectOverview = props => {
    
  return (
    <div className="project_overview p-3 d-flex flex-column justify-content-center align-items-center">
      <h6>{props.name} - Techstack used {props.techs}</h6>
      <Link to={props.link}>
      see more
      </Link>
    </div>
  );
}

export default SinglePortfolioProjectOverview;