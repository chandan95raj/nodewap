import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import Style from "./section.module.css";
import ContactForm from "../../shared/contact-form";
const Section = () =>{
  return (
    <>
      <Container className="my-5 py-4">
        <Row>
          <Col className="py-5">
            <div className={`${Style.heading} px-4`}>
              <h3>To make requests for further information,<br /><span className="text-primary">contact us </span> via our social channels.</h3>
            </div>
            <div className="sub_heading px-4">
              <p>We just need a couple of hours!<br /> No more than 2 working days since receiving your issue ticket</p>
            </div>
          </Col>
            <ContactForm />
        </Row>
     </Container>
   </>
  );
}
export default Section;
