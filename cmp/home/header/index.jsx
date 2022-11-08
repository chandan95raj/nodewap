import Style from "./header.module.css";
import{
    Container,
    Row,
    Col,
    Form,
    Button
} from "react-bootstrap";
import Link from 'next/link';
import Image from "next/image";

const Header = ()=>{
    return (
       <>
            <Container fluid className={` ${Style.mainCont}`}>
                <Row>
                    <Col md="6" className={` p-5 m-0`}>
                        <div className={`${Style.LeftBg}`}>
                            <div className={`${Style.LeftSideBg}`}></div>
                            <div className={``}>
                                <h4 className={`${Style.headData} mb-3`}>Applying Data Science</h4>
                                <strong className={` ${Style.bigdata}`}>big data</strong>
                                <p className={`${Style.security} mb-4`}>Security analytics</p>
                                <div style={{width:'90%'}} className={`${Style.paraaffix}`}>
                                    <p className={`${Style.affiexed} mb-4`}>
                                        Affixed pretend account ten natural. 
                                        Need eat week even yet that. Incommode
                                        delighted he resolving sportsmen do in
                                        listening.
                                    </p>
                                </div>
                                <Link href='/'>
                                    <Button className={`${Style.btnGrad}`}>
                                        Get Started
                                    </Button> 
                                </Link>
                            </div>
                        </div>

                    </Col>

                    <Col md="6" className={` p-0 m-0`}>
                        <div className={`  ${Style.RightBg}`}>
                            <div className={`${Style.mainbg} px-3 `}>
                                <Image 
                                    src="/13.png"
                                    width={597}
                                    height={429}
                                    alt="pic"  
                                     />
                            </div>

                            <div className={`${Style.roundCont} `}>
                                <Image 
                                    src="/44.png"
                                    width={218}
                                    height={212}
                                    alt="round"  
                                     />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
       </>
    );
}
export default Header;