import Style from "./contact.module.css";
import {
    Row,
    Col
} from "react-bootstrap";
const Contact =()=>{
    return (
        <>
            <div className={`${Style.imgDiv}`}>
                <div className={`${Style.imgoverlay}`}>
                    <div className="container-fluid">
                        <Row className={`p-5 ${Style.contRow}`}>
                            <Col md="6" className="d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <div className={`${Style.h1Div}`}>
                                        <h1>Obtaining further information by make a contact with our experienced IT staffs.</h1>
                                    </div>
                                    <div>
                                        <h6 className={`${Style.para}`}>We’re available for 8 hours a day! Contact to require a detailed analysis and assessment of your plan</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="d-flex flex-column align-items-center justify-content-center">
                                <div className={` text-center ${Style.contectDiv}`}>
                                    <i className={`fa fa-phone`} style={{color:'white', fontSize:'40px'}}></i>
                                    <h6>REACH OUT NOW</h6>
                                    <h1>94723 95194</h1>
                                    <button className="btn btn-light">Contact</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;
