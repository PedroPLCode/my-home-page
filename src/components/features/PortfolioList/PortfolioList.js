//import { Envelope, Telephone, Instagram, Linkedin, Github, ArrowRight} from 'react-bootstrap-icons';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import { Link } from 'react-router-dom';
//import { Container } from 'react-bootstrap';
//import { clsx } from 'clsx';
import SinglePortfolioProjectOverview from '../../features/SinglePortfolioProjectOverview/SinglePortfolioProjectOverview';
import portfolioDetails from '../../../portfolioDetails.js';
import styles from './PortfolioList.module.scss';

const PortfolioList = () => {

  return (      
    <ul>
      {portfolioDetails.map(project => 
        <li>

            <SinglePortfolioProjectOverview key={project.name}
                                            link={project.link}
                                            name={project.name}
                                            techs={project.techs}
                                            desc={project.desc}
                                            gitHubLink={project.githublink}
                                            liveLink={project.livelink} />

          </li>
      )}
    </ul>
  );
}
    
export default PortfolioList;