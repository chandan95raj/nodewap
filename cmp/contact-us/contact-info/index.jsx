import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import Style from "./style.module.css";
const ContactInfo = () =>{
  const design = (
     <Container className="  my-5 py-4">
    <Row>
    <Col>
     <div>
     <h5 className={`${Style.con_heading}`}>San Francisco</h5>
     <ul className={`${Style.conact_info__list}`}>
     <li>58 Howard Street #2 San Francisco, CA 941</li>
     <li ><a href="#" className={`${Style.css_efect}`}>contact.sanfrancisco@mitech.com</a></li>
     <li className={`${Style.css_efect}`}>(+68)1221 09876</li>
     </ul>
     </div>
    </Col>
    <Col>
    <div>
    <h5 className={`${Style.con_heading}`}>New York</h5>
    <ul className={`${Style.conact_info__list}`}>
    <li>58 Howard Street #14 New York</li>
    <li><a href="#" className={`${Style.css_efect}`}>contact.newyork@mitech.com</a></li>
    <li className={`${Style.css_efect}`}>(+47)1221 09878</li>
    </ul>
    </div>
    </Col>
    <Col>
    <div>
    <h5 className={`${Style.con_heading}`}>Russia</h5>
    <ul className={`${Style.conact_info__list}`}>
    <li>The Courtyard Building 11 Curtain Road, Russia</li>
    <li ><a href="#" className={`${Style.css_efect}`}>contact.russia@mitech.com</a></li>
    <li className={`${Style.css_efect}`}>(+53)1221 09877</li>
    </ul>
    </div>
    </Col>
    </Row>
     </Container>
  );
  return design;
}
export default ContactInfo;
