import { clsx } from 'clsx';
import styles from './ContactPage.module.scss';
import ContactCanvas from '../../features/ContactCanvas/ContactCanvas';

const ContactPage = () => {

  return (
    <div className='wrapper'>
    <div className={clsx("d-flex flex-column justify-content-center align-items-center", styles.contact_page)}>
      <h5>&lt;contact me via email or whassap&gt;</h5>
      <ContactCanvas />
    </div>
    </div>
  );
}
  
export default ContactPage;