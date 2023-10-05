import { clsx } from 'clsx';
import styles from './ContactPage.module.scss';

const ContactPage = () => {

  return (
    <div className={clsx("full-height d-flex flex-column justify-content-center align-items-center", styles.contact_page)}>
      <h5>&lt;contact me via email or whassap&gt;</h5>
      <h5>&lt;contact&gt;</h5>
      <div className="d-flex flex-row justify-content-center align-items-center gap-2"> 
        <a href='mailto:piotrek.gaszczynski@gmail.com'>&lt;mailto=piotrek.gaszczynski@gmail.com&gt;</a>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-end gap-2">
        <a href='tel:48605208772'>&lt;callto=(+48)605208772&gt;</a>
      </div>
      <h5>&lt;/contact&gt;</h5>
    </div>
  );
}
  
export default ContactPage;