import React from "react";
import { clsx } from "clsx";
import styles from './MainPage.module.scss';

const MainPage = () => {

  return (
    <div className={clsx(styles.main__page)}>
      <p>Buenos Dias,<br/>I'm Piotr Gaszczyński<br/>Front End Developer<br/>check my portfolio,<br/>and contact me</p>
    </div>
  );
}

export default MainPage;