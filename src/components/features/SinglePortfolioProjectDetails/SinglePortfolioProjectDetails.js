import { Link, useParams } from 'react-router-dom';
import { projectsDetails, links } from  '../../../settings.js';
import clsx from 'clsx';
import { Container } from 'react-bootstrap';
import styles from './SinglePortfolioProjectDetails.module.scss';

const SinglePortfolioProjectDetails = props => {
    
  const { projectId } = useParams();

  let projectFound = false;
  
  for (let SinglePortfolioProject of projectsDetails) {
    if (SinglePortfolioProject.link === projectId) {
      projectFound = true;
      return (
        <div className={styles.wrapper}>
          <div className={styles.iframe_wrapper}>
            <iframe title={SinglePortfolioProject.name} type="text/html" src={SinglePortfolioProject.liveLink} className={styles.iframe}></iframe>
          </div>
          <div className={styles.project_details}>
            <div className={styles.buttons}>
              <Link to='/portfolio' onClick={props.closeHamburger} >back to all projects</Link>
            </div>
            <div className={styles.text}>
              <h3>{SinglePortfolioProject.name}</h3>
              <h3>{SinglePortfolioProject.desc}</h3>
              <h3>{SinglePortfolioProject.techs}</h3>
            </div>
            <div className={styles.buttons}>
              <Link to={SinglePortfolioProject.gitHubLink} 
                    target='_blank' >
                    Git Hub repo
              </Link>
              <Link to={SinglePortfolioProject.liveLink} 
                    target='_blank' >
                    live project
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
  if (!projectFound) {
    return (
      <Container className={clsx(styles.wrapper)}>
        <div className={clsx(styles.project_details)}>
          <Link to='/portfolio' >back</Link>
          <h3>PROJECT NOT FOUND</h3>
          <strong>Looks like, project you are trying to open is not here anymore..</strong>
        </div>
        </Container>
    );
  }
}

export default SinglePortfolioProjectDetails;