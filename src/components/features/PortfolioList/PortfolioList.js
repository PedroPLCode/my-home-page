import SinglePortfolioProjectOverview from '../../features/SinglePortfolioProjectOverview/SinglePortfolioProjectOverview';
import { projectsDetails, links } from '../../../settings.js';
import styles from './PortfolioList.module.scss';
import { Link } from 'react-router-dom';

const PortfolioList = props => {

  return (      
    <ul>
      {projectsDetails.map(project => 
        <li key={project.link}>
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
          <Link to={links.myGitHubLink} target="_blank">
            <h5>And more</h5>
            <h6>See my GitHub profile</h6>
          </Link>
        </li>
    </ul>
  );
}
    
export default PortfolioList;