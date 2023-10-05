import { Link } from 'react-router-dom';

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