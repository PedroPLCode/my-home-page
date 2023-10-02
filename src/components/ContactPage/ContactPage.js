import { Envelope, Telephone, Instagram, Linkedin, Github} from 'react-bootstrap-icons';

const ContactPage = () => {

  return (
    <div className="d-flex flex-column text-white justify-content-center align-items-center">
      <h3>ContactPage component</h3>
      <h5>You can contact me by email or whassap</h5>
      <div className="d-flex flex-row justify-content-center align-items-center gap-2"> 
        <a href='mailto:piotrek.gaszczynski@gmail.com'><Envelope color="royalblue" size={22} /> piotrek.gaszczynski@gmail.com</a>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-end gap-2">
        <a href='tel:48605208772'><Telephone color="royalblue" size={22} /> (+48)605208772</a>
      </div>
    </div>
  );
}
  
export default ContactPage;