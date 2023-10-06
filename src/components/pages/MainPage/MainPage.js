import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { clsx } from "clsx";
import styles from './MainPage.module.scss';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const MainPage = () => {

  return (
    <div className={clsx("d-flex flex-column justify-content-center align-items-center", styles.main_page)}>
      <p>Hi,<br/>I'm Piotr Gaszczyński<br/>Front End Developer<br/>explore my webpage,<br/>explore my portfolio,<br/>and contact me</p>
    </div>
  );
}

export default MainPage;