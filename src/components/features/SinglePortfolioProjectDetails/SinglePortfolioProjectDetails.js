import { Link, useParams } from 'react-router-dom';
import { projectsDetails, links } from  '../../../settings.js';
import clsx from 'clsx';
import { Container } from 'react-bootstrap';
import styles from './SinglePortfolioProjectDetails.module.scss';
import { useState } from 'react';
import creatively from './images/creatively.png';
import pizzeria from './images/pizzeria.png';
import blog from './images/blog.png';
import todo from './images/todo.png';
import waiter from './images/waiter.png';
import game from './images/game.png';
import calculator from './images/calculator.png';

const SinglePortfolioProjectDetails = props => {
    
  const { projectId } = useParams();
  const [backgroundActive, setBackgroundActive] = useState(false)

  const changeBackgroundColorOn = () => {
    setBackgroundActive(true);
  }
  const changeBackgroundColorOff = () => {
    setBackgroundActive(false);
  }

  let projectFound = false;
  
  for (let SinglePortfolioProject of projectsDetails) {
    if (SinglePortfolioProject.link === projectId) {
      projectFound = true;
      let background;
      if (SinglePortfolioProject.image === 'pizzeria.png') {
        background = pizzeria;
      } else if (SinglePortfolioProject.image === 'blog.png') {
        background = blog;
      } else if (SinglePortfolioProject.image === 'waiter.png') {
        background = waiter;
      } else if (SinglePortfolioProject.image === 'todo.png') {
        background = todo;
      } else if (SinglePortfolioProject.image === 'creatively.png') {
        background = creatively;
      } else if (SinglePortfolioProject.image === 'game.png') {
        background = game;
      } else if (SinglePortfolioProject.image === 'calculator.png') {
        background = calculator;
      }
      return (
        <div className={clsx(styles.wrapper)}
             style={{backgroundImage: `url(${background})`}}>
          <div className={clsx(styles.project_details)}
          style={{animation: backgroundActive ? `background_onHover 3s 3s infinite alternate both` : `background_pulse 3s 3s infinite alternate both`}}>
            <div className={styles.buttons}>
              <Link to='/portfolio' onClick={props.closeHamburger} >back to all</Link>
            </div>
            <div className={styles.text}
                 style={{opacity: backgroundActive ? 0 : 1}}>
              <h3>{SinglePortfolioProject.name}</h3>
              <h3>{SinglePortfolioProject.desc}</h3>
              <h3>{SinglePortfolioProject.techs}</h3>
            </div>
            <div className={styles.buttons}>
              <Link to={SinglePortfolioProject.gitHubLink} 
                    target='_blank' 
                    onMouseEnter={changeBackgroundColorOn}
                    onMouseLeave={changeBackgroundColorOff} >
                    Git Hub repo
              </Link>
              <Link to={SinglePortfolioProject.liveLink} 
                    target='_blank' 
                    onMouseEnter={changeBackgroundColorOn}
                    onMouseLeave={changeBackgroundColorOff} >
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