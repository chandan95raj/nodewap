import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import Style from "./info.module.css";
const Info = () =>{
  return(
    <Container className="  my-5 py-4">
      <Row>
        <Col>
          <div>
            <h5 className={`${Style.con_heading}`}>India</h5>
            <ul className={`${Style.conact_info__list}`}>
              <li>4, Jiya Lal Roy Rd, Muzaffarpur, Bihar 842001</li>
              <li ><a href="#" className={`${Style.css_efect}`}>nodewapitsolution@gmail.com</a></li>
              <li className={`${Style.css_efect}`}>(+91) 94723 95194</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div>
            <h5 className={`${Style.con_heading}`}>India</h5>
            <ul className={`${Style.conact_info__list}`}>
              <li>4, Jiya Lal Roy Rd, Muzaffarpur, Bihar 842001</li>
              <li><a href="#" className={`${Style.css_efect}`}>nodewapitsolution@gmail.com</a></li>
              <li className={`${Style.css_efect}`}>(+91) 94723 95194</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div>
            <h5 className={`${Style.con_heading}`}>India</h5>
            <ul className={`${Style.conact_info__list}`}>
              <li>4, Jiya Lal Roy Rd, Muzaffarpur, Bihar 842001</li>
              <li ><a href="#" className={`${Style.css_efect}`}>nodewapitsolution@gmail.com</a></li>
              <li className={`${Style.css_efect}`}>(+91) 94723 95194</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Info;
