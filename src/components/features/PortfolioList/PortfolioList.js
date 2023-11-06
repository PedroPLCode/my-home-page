import SinglePortfolioProjectOverview from '../../features/SinglePortfolioProjectOverview/SinglePortfolioProjectOverview';
import portfolioDetails from '../../../portfolioDetails.js';
import styles from './PortfolioList.module.scss';

const PortfolioList = props => {

  return (      
    <ul>
      {portfolioDetails.map(project => 
        <li>
          <div>
            <SinglePortfolioProjectOverview key={project.name}
                                            link={project.link}
                                            name={project.name}
                                            techs={project.techs}
                                            desc={project.desc}
                                            gitHubLink={project.githublink}
                                            liveLink={project.livelink} 
                                            setShowNavMenu={props.setShowNavMenu} closeHamburger={props.closeHamburger} showNavMenu={props.showNavMenu}
                                            />
            </div>
        </li>
      )}
        <li className={styles.last} onClick={props.closeHamburger} >
          <h5>And more</h5>
          <h6>Ask me for more</h6>
        </li>
    </ul>
  );
}
    
export default PortfolioList;