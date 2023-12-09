import styles from './PageNotFound.module.scss';
import { clsx } from 'clsx';

const PageNotFound = () => {

  return (
    <div className={clsx(styles.pagenotfound)}>
      <h3>Page Not Found</h3>
      <h5>Error 404</h5>
      <strong>Looks like,<br/>page you are<br/>trying to open<br/>is not here..</strong>
    </div>
  );
}
  
export default PageNotFound;