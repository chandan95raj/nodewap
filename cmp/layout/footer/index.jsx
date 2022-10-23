import Style from "./footer.module.css";
import {
    Row,
    Col,
    Nav
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer =()=>{
    const design = (
        <>
            <div className={`text-white px-5 py-5 ${Style.allText}`} style={{backgroundColor:"#000000"}}>
                <Row>
                    <Col md="4" style={{lineHeight:"20px"}}>
                        <h5>nodewap it solution.pvt.ltd</h5>
                        <p>4, Jiya Lal Roy Rd, Muzaffarpur, Bihar 842001</p>
                        <p>nodewapitsolution@gmail.com</p>
                        <p className="mb-4">094723 95194</p>
                        <div className={`${Style.icon_box}`}>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-youtube"></i>
                        </div>
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>IT Services</h5>                    
                        <Nav.Link to="">website desigining</Nav.Link>
                        <Nav.Link to="">Graphic designing</Nav.Link>
                        <Nav.Link to="">Social media marketing</Nav.Link>
                        <Nav.Link to="">mobile app developement</Nav.Link>
                        <Nav.Link to="">digital marketing</Nav.Link> 
                        <Nav.Link to="">SEO,SEM</Nav.Link>                        
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>Quick links</h5>
                        <Nav.Link to="">privacy policy</Nav.Link>
                        <Nav.Link to="">cookies policy</Nav.Link>
                        <Nav.Link to="">terms & conditions</Nav.Link>                        
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>Support</h5>
                        <Nav.Link to="">help</Nav.Link>
                        <Nav.Link to="">contact </Nav.Link>
                        <Nav.Link to="">about</Nav.Link>
                    </Col>
                    <Col md="2">
                        <div>
                            <img src="google.webp" className="mb-3 rounded" />
                            <img src="apple.webp" className="mb-3 rounded"  />
                        </div>
                    </Col> 
                </Row>
                <hr className="mt-5" />

                <div className="text-center mt-5">
                    <img src="logo.webp" />
                   <p className="pt-4"> © 2022 Mitech. <a>All Rights Reserved.</a> </p>
                </div>

            </div>
        </>
    );
    return design;
}

export default Footer;