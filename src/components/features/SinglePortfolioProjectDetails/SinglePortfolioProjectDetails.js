import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import portfolioDetails from '../../../portfolioDetails.js';
import clsx from 'clsx';
import styles from './SinglePortfolioProjectDetails.module.scss';

const SinglePortfolioProjectDetails = props => {
    
  const { projectId } = useParams();

  let projectFound = false;

  for (let SinglePortfolioProject of portfolioDetails) {
    if (SinglePortfolioProject.link === projectId) {
      projectFound = true;
      return (
        <div className={clsx("d-flex flex-column justify-content-center align-items-center", styles.project_details)}>
                <Link to='/portfolio' >back</Link>
          <h3>{SinglePortfolioProject.name}</h3>
          <h3>{SinglePortfolioProject.desc}</h3>
          <h3>{SinglePortfolioProject.techs}</h3>
          <Link to={SinglePortfolioProject.gitHubLink} target='_blank'>
            link to Git Hub repo
          </Link>
          <Link to={SinglePortfolioProject.liveLink} target='_blank'>
            link to live project
          </Link>
        </div>
      );
    }
  }
  if (!projectFound) {
    return (
      <div className={clsx("d-flex flex-column justify-content-center align-items-center", styles.project_details)}>
        <Link to='/portfolio' >back</Link>
        <h3>PROJECT NOT FOUND</h3>
        <strong>Looks like, project you are trying to open is not here anymore..</strong>
      </div>
    );
  }
}

export default SinglePortfolioProjectDetails;