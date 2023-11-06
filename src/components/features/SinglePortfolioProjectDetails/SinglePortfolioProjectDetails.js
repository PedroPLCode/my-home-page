import { Link, useParams } from 'react-router-dom';
import portfolioDetails from '../../../portfolioDetails.js';
import clsx from 'clsx';
import { Container } from 'react-bootstrap';
import styles from './SinglePortfolioProjectDetails.module.scss';
import { useState } from 'react';

const SinglePortfolioProjectDetails = props => {
    
  const { projectId } = useParams();
  const [borderActive, setBorderActive] = useState(false)

  const changeBorderColor = () => {
    setBorderActive(!borderActive);
  }

  let projectFound = false;

  for (let SinglePortfolioProject of portfolioDetails) {
    if (SinglePortfolioProject.link === projectId) {
      projectFound = true;
      return (
        <div className={clsx(styles.wrapper, borderActive ? styles.border_active : '')}>
          <div className={clsx(styles.project_details, borderActive ? styles.border_active : '')}>
            <div className={styles.buttons}>
              <Link to='/portfolio' onClick={props.closeHamburger} >back to all</Link>
            </div>
            <div className={styles.text}>
              <h3>{SinglePortfolioProject.name}</h3>
              <h3>{SinglePortfolioProject.desc}</h3>
              <h3>{SinglePortfolioProject.techs}</h3>
            </div>
            <div className={styles.buttons}>
              <Link to={SinglePortfolioProject.gitHubLink} target='_blank' onMouseEnter={changeBorderColor} onMouseLeave={changeBorderColor}>
                Git Hub repo
              </Link>
              <Link to={SinglePortfolioProject.liveLink} target='_blank' onMouseEnter={changeBorderColor} onMouseLeave={changeBorderColor}>
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
      <Container className={clsx(styles.wrapper, borderActive ? styles.border_active : '')}>
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