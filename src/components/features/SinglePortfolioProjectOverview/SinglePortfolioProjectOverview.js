import { Link } from 'react-router-dom';
import styles from './SinglePortfolioProjectOverview.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import creatively from './images/creatively.png';
import pizzeria from './images/pizzeria.png';
import blog from './images/blog.png';
import todo from './images/todo.png';
import waiter from './images/waiter.png';
import game from './images/game.png';

const SinglePortfolioProjectOverview = props => {

  let background;
  if (props.image === 'pizzeria.png') {
    background = pizzeria;
  } else if (props.image === 'blog.png') {
    background = blog;
  } else if (props.image === 'waiter.png') {
    background = waiter;
  } else if (props.image === 'todo.png') {
    background = todo;
  } else if (props.image === 'creatively.png') {
    background = creatively;
  } else if (props.image === 'game.png') {
    background = game;
  }
    
  const [isHover, setIsHover] = useState(false);

  const hoverOn = () => {
    setIsHover(true);
  };

  const hoverOut = () => {
    setIsHover(false);
  };

  return (
    <Link style={{backgroundImage: isHover ? `url(${background})` : ''}} onMouseEnter={hoverOn} onMouseLeave={hoverOut} to={props.link} className={clsx("p-3 d-flex flex-column justify-content-center align-items-center", styles.project_overview)} onClick={props.closeHamburger} >
        <h5>{props.name}</h5>
        <h6>{props.techs}</h6>
    </Link>
  );
}

export default SinglePortfolioProjectOverview;