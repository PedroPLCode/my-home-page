import { Link } from 'react-router-dom';
import styles from './SinglePortfolioProjectOverview.module.scss';
import { useState } from 'react';
import creatively from './images/creatively.png';
import pizzeria from './images/pizzeria.png';
import blog from './images/blog.png';
import git from './images/git.png';
import waiter from './images/waiter.png';
import game from './images/game.png';
import calculator from './images/calculator.png';
import food from './images/food.png';

const SinglePortfolioProjectOverview = props => {

  let background;
  if (props.image === 'pizzeria.png') {
    background = pizzeria;
  } else if (props.image === 'blog.png') {
    background = blog;
  } else if (props.image === 'waiter.png') {
    background = waiter;
  } else if (props.image === 'git.png') {
    background = git;
  } else if (props.image === 'creatively.png') {
    background = creatively;
  } else if (props.image === 'game.png') {
    background = game;
  } else if (props.image === 'calculator.png') {
    background = calculator;
  } else if (props.image === 'food.png') {
    background = food;
  }
    
  const [isHover, setIsHover] = useState(false);

  const hoverOn = () => {
    setIsHover(true);
  };

  const hoverOut = () => {
    setIsHover(false);
  };

  return (
    <Link to={props.link}
          style={{backgroundImage: (window.innerWidth <= 1148) || isHover ? `url(${background})` : ''}} 
          className={styles.project__overview} onClick={props.closeHamburger}
          onMouseEnter={hoverOn} 
          onMouseLeave={hoverOut} >
      <h5>{props.name}</h5>
      <h6>{props.techs}</h6>
    </Link>
  );
}

export default SinglePortfolioProjectOverview;