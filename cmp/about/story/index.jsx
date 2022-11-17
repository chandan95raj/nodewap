import Style from "./story.module.css";
import {
    Col,
    Row,
    Container
} from "react-bootstrap";
import Image from 'next/image';
const Story =()=>{
    return (
        <>
        <Container fluid   className={`${Style.mainCont}`}>
                <Row>
                    <Col md="6" >
                    <div>
                        <Image src="/5-1.jpg"
                            alt="storybg.png"
                            height={485}
                            width={630}
                            placeholder="blur"
                            blurDataURL="/blurcardbg.webp"
                        />
                        <Image src="" />
                        </div>
                    </Col>
                    <Col md="6" className={`${Style.rightDiv}`}>
                        <div className={`${Style.allText}`}>
                            <h4>
                                    <span  className={`text-center me-2`}>
                                        <Image
                                            src="/shape_line.png"
                                            width={35}
                                            height={10}
                                            alt="shape_line"
                                        />
                                    </span>
                               WHO WE ARE
                            </h4>
                            <h2>
                                  Preparing for your success <br /> trusted source in IT services
                            </h2>

                            <p>
                              Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight sang lose.
                            </p>
                        </div>
                        <div className={`${Style.optionDiv}`}>
                            <div className="d-flex pe-4">
                                <div className={`me-3 `} >
                                    <i className={`fa fa-check ${Style.iconBox}`}></i>
                                </div>
                                <div>
                                    <h5>Various Options</h5>
                                    <p>Tedious so to behaved written account ferrars moments.</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="me-3">
                                    <i className={`fa fa-check ${Style.iconBox2}`}></i>
                                </div>
                                <div>
                                    <h5>Cyber Security</h5>
                                    <p>Tedious so to behaved written account ferrars moments.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
        </>
    );
}
export default Story;
