import Style from "./footer.module.css";
import {
    Row,
    Col,
    Nav
} from "react-bootstrap";
import Link from "next/link";
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
                            <Nav.Link href="https://twitter.com"><i className="fa fa-twitter"></i></Nav.Link>
                            <Nav.Link href="https://instagram.com/wapinstitution?igshid=YmMyMTA2M2Y="><i className="fa fa-instagram"></i></Nav.Link>
                            <Nav.Link href="https://www.youtube.com/channel/UCx86YvOOdq5KLqENKq6ZOng"><i className="fa fa-facebook"></i></Nav.Link>
                            <Nav.Link href="https://www.facebook.com/wapinstitution/"><i className="fa fa-youtube"></i></Nav.Link>
                        </div>
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>IT Services</h5>
                        <Nav.Link href="https://twitter.com">website desigining</Nav.Link>
                        <Nav.Link href="">Graphic designing</Nav.Link>
                        <Nav.Link href="">Social media marketing</Nav.Link>
                        <Nav.Link href="">mobile app developement</Nav.Link>
                        <Nav.Link href="">digital marketing</Nav.Link>
                        <Nav.Link href="">SEO,SEM</Nav.Link>
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>Quick links</h5>
                        <Nav.Link href="">privacy policy</Nav.Link>
                        <Nav.Link href="">cookies policy</Nav.Link>
                        <Nav.Link href="">terms & conditions</Nav.Link>
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>Support</h5>
                        <Nav.Link href="">help</Nav.Link>
                        <Nav.Link href="">contact </Nav.Link>
                        <Nav.Link href="">about</Nav.Link>
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
