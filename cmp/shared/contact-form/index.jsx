import Style from "./contact-form.module.css";
import {
    Col
} from "react-bootstrap";
const contactForm = ()=>{
    return(
        <>
        <Col>
              <form className={`${Style.contact_form}`}>
                <input type="text"  name="con_name" placeholder="To make requests for further informat *" />
                <input type="email" name="email" placeholder="Email *" />
                <input name="con_subject"  type="text" placeholder="Subject *" className={`${Style.con_subject}`} />
                <textarea name="con_message" placeholder="Please describe what you need." className={`${Style.con_message}`}></textarea>
                <button className={`${Style.submit_btn} btn submit-btn btn-primary`} value="submit">Send message</button>
              </form>
          </Col>
        </>
    );
}
export default contactForm;