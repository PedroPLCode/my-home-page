import { Envelope, Telephone, Instagram, Linkedin, Github} from 'react-bootstrap-icons';

const ContactPage = () => {

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3>ContactPage component</h3>
      <h5>You can contact me by email or whassap</h5>
      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <Envelope color="royalblue" size={32} /> 
        <a href='mailto:piotrek.gaszczynski@gmail.com'>piotrek.gaszczynski@gmail.com</a>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-end gap-2">
        <Telephone color="royalblue" size={32} />
        <a href='tel:48605208772'>(+48)605208772</a>
      </div>
    </div>
  );
}
  
export default ContactPage;