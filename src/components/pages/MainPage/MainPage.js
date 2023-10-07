import React from "react";
import { clsx } from "clsx";
import styles from './MainPage.module.scss';
//import { Link } from 'react-router-dom';
//import { Button } from "react-bootstrap";

const MainPage = () => {

  return (
    <div className={clsx("d-flex flex-column justify-content-center align-items-center", styles.main_page)}>
      <p>Hi,<br/>I'm Piotr Gaszczyński<br/>Front End Developer<br/>explore my webpage,<br/>explore my portfolio,<br/>and contact me</p>
    </div>
  );
}

export default MainPage;