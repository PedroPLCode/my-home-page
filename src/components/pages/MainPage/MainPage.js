import React from "react";
import { clsx } from "clsx";
import styles from './MainPage.module.scss';

const MainPage = () => {

  return (
    <div className={clsx(styles.main_page)}>
      <p>Hi,<br/>I'm Piotr Gaszczyński<br/>Front End Developer<br/>explore my webpage,<br/>explore my portfolio,<br/>and contact me</p>
    </div>
  );
}

export default MainPage;