import styles from './PageNotFound.module.scss';
import { clsx } from 'clsx';

const PageNotFound = () => {

  return (
    <div className={clsx(styles.pagenotfound)}>
      <h3>Page Not Found</h3>
      <h5>Error 404</h5>
      <strong>Looks like, page you are trying to open is not here..</strong>
    </div>
  );
}
  
export default PageNotFound;