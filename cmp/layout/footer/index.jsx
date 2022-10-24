import Style from "./footer.module.css";
import {
    Row,
    Col,
    Nav
} from "react-bootstrap";
import Link from "next/link";
import Logo from '../../shared/logo';

const Footer =()=>{
    const design = (
        <>
            <div className={`text-white px-5 py-5 ${Style.allText}`} style={{backgroundColor:"#000000"}}>
                <Row>
                    <Col md="4" style={{lineHeight:"20px"}}>
                        <Logo />
                        <p>nodewapitsolution@gmail.com</p>
                        <p className="mb-4">094723 95194</p>
                        <div className={`${Style.icon_box}`}>
                            <Link href="https://twitter.com"><i className="fa fa-twitter"></i></Link>
                            <Link href="https://instagram.com/wapinstitution?igshid=YmMyMTA2M2Y="><i className="fa fa-instagram"></i></Link>
                            <Link href="https://www.youtube.com/channel/UCx86YvOOdq5KLqENKq6ZOng"><i className="fa fa-facebook"></i></Link>
                            <Link href="https://www.facebook.com/wapinstitution/"><i className="fa fa-youtube"></i></Link>
                        </div>
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>IT Services</h5>
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>Quick links</h5>
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>Support</h5>
                    </Col>
                    <Col md="2">
                        <div>
                            <img src="google.webp" className="mb-3 rounded" />
                            <img src="apple.webp" className="mb-3 rounded"  />
                        </div>
                    </Col>
                </Row>
                <hr className="mt-5" />

                <div className="d-flex justify-content-center align-items-center flex-column mt-5">
                    <Logo />
                    <small>&#169; Nodewap | All Rights Reserved</small>
                </div>

            </div>
        </>
    );
    return design;
}

export default Footer;
