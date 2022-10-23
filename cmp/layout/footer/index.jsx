import Style from "./footer.module.css";
import {
    Row,
    Col,
    Nav
} from "react-bootstrap";

const Footer =()=>{
    const design = (
        <>
            <div className="text-white px-5 py-5" style={{backgroundColor:"#000000"}}>
                <Row>
                    <Col md="4" style={{lineHeight:"20px"}}>
                        <h5>Company</h5>
                        <p>58 Howard Street #2 San Francisco, CA 941</p>
                        <p>contact@aeroland.com</p>
                        <p className="mb-4">(+68)1221 09876</p>
                        <div className={`${Style.icon_box}`}>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-youtube"></i>
                        </div>
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>IT Services</h5>                    
                        <Nav.Link to="">Managed IT</Nav.Link>
                        <Nav.Link to="">IT Support</Nav.Link>
                        <Nav.Link to="">IT Consultancy</Nav.Link>
                        <Nav.Link to="">Cloud Computing</Nav.Link>
                        <Nav.Link to="">Cyber Security</Nav.Link>                        
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>Quick links</h5>
                        <Nav.Link to="">Pick up locations</Nav.Link>
                        <Nav.Link to="">Terms of Payment</Nav.Link>
                        <Nav.Link to="">Privacy Policy</Nav.Link>
                        <Nav.Link to="">Where to Find Us</Nav.Link>                        
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>Support</h5>
                        <Nav.Link to="">Forum Support</Nav.Link>
                        <Nav.Link to="">Help & FAQ</Nav.Link>
                        <Nav.Link to="">Contact Us</Nav.Link>
                        <Nav.Link to="">Pricing and plans</Nav.Link>
                        <Nav.Link to="">Cookies Policy</Nav.Link>
                    </Col>
                    <Col md="2" className="d-flex justify-content-center align-items-center">
                        <div>
                            <img src="google.webp" className="mb-3 rounded" />
                            <img src="apple.webp" className="rounded"  />
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