import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import Style from "./style.module.css";
const Action = () =>{
const design = (
  <>
   <Container fluid  className={`d-flex flex-wrap justify-content-center align-items-center my-5 ${Style.con_action}`}>
   <Row className="w-100 ">
   <Col className={`col-md-8 ${Style.action_heading_box}`}>
   <h3 className={`${Style.action_heading}`}>We run all kinds of IT services that vow <br />your <span className="text-primary"> success</span></h3>
   </Col>
   <Col className={`col-md-4 p-0 d-flex flex-wrap justify-content-center align-items-center ${Style.all_btn_box}`}>
  <button className= {` btn btn-primary ${Style.lets_btn}`}><i className={`fa fa-comment ${Style.comment_icon}`}></i>Let's talk</button>
  <button className={`btn ${Style.get_info_btn}`}><i className={` fa fa-info-circle ${Style.comment_icon}`}></i>Get info</button>
  </Col>
  </Row>
 </Container>

 </>
  );
  return design;
}
export default Action;
