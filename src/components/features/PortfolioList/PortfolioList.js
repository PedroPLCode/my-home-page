import SinglePortfolioProjectOverview from '../../features/SinglePortfolioProjectOverview/SinglePortfolioProjectOverview';
import { projectsDetails, links } from '../../../settings.js';
import styles from './PortfolioList.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const PortfolioList = props => {
console.log(projectsDetails)
  return (      
    <ul>
      {projectsDetails.map(project => 
        <li>
          <div>
            <SinglePortfolioProjectOverview key={project.name}
                                            link={project.link}
                                            name={project.name}
                                            techs={project.techs}
                                            desc={project.desc}
                                            image={project.image}
                                            gitHubLink={project.githublink}
                                            liveLink={project.livelink} 
                                            setShowNavMenu={props.setShowNavMenu} closeHamburger={props.closeHamburger} showNavMenu={props.showNavMenu}
                                            />
            </div>
        </li>
      )}
        <li className={styles.last} onClick={props.closeHamburger} >
          <Link to='https://github.com/PedroPLCode/' target="_blank">
            <h5>And more</h5>
            <h6>See my GitHub profile</h6>
          </Link>
        </li>
    </ul>
  );
}
    
export default PortfolioList;