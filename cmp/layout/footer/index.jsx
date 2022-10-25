import Style from "./footer.module.css";
import {
    Row,
    Col,
    Nav
} from "react-bootstrap";

import Link from "next/link";
import Logo from '../../shared/logo';
import data from "../navbar/menu.json"; 
const MenuDesign = (data)=>{
    return (
        <>       
            <Link href={data.menuInfo.url} passHref>
                <a className="text-white">
                    {data.menuInfo.label}
                </a> 
            </Link>     
        </>
    );
}

const Footer =()=>{
    const design = (
        <>
            <div className={`text-white px-5 py-5 ${Style.allText}`} style={{backgroundColor:"#000000"}}>
                <Row>
                    <Col md="4" style={{lineHeight:"20px"}}>
                        <Logo />
                        <p><i className="fa fa-envelope-o"></i> {process.env.NEXT_PUBLIC_EMAIL}</p>
                        <p className="mb-4"><i className="fa fa-phone"></i> +91 {process.env.NEXT_PUBLIC_PHONE_NUMBER}</p>
                        <div className={`${Style.icon_box}`}>
                            <Link href="https://twitter.com"><i className="fa fa-twitter"></i></Link>
                            <Link href="https://instagram.com/wapinstitution?igshid=YmMyMTA2M2Y="><i className="fa fa-instagram"></i></Link>
                            <Link href="https://www.youtube.com/channel/UCx86YvOOdq5KLqENKq6ZOng"><i className="fa fa-facebook"></i></Link>
                            <Link href="https://www.facebook.com/wapinstitution/"><i className="fa fa-youtube"></i></Link>
                        </div>
                    </Col>
                    <Col md="2" style={{lineHeight:"40px"}}>
                        <h5>Quick links</h5>
                        <div className="d-flex flex-column">
                            {
                                data.map((item)=>{
                                    return <MenuDesign menuInfo={item} key={item.id} />;
                                })
                            }
                        </div>
                    </Col>
                    <Col md="3" style={{lineHeight:"40px"}}>
                        <h5>Terms</h5>
                        <div className="d-flex flex-column">
                            <Link href="/privacy-policy" passHref>
                               <a className="text-white">Privacy Policy</a> 
                            </Link>
                            <Link href="/terms" passHref>
                                <a className="text-white">
                                    Terms & Conditions
                                </a>
                            </Link>
                        </div>
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
