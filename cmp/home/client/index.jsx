import Style from "./client.module.css";
import {
    Col,
    Row,
    Container 
} from "react-bootstrap";
import Image from 'next/image';
const Client =()=>{
    return (
        <>
            <Container>
                <div className="col-md-7 m-auto text-center py-4">
                    <h5 className={`${Style.title}`}>
                    Step forward to become one of <span>49,494</span> successful clients of nodewap and get in the front line for the most wonderful presentation.
                    </h5>
                </div>
            </Container>

            <Container fluid>
                <Row>
                    <Col md="6">
                        <Image src="/home-reputable-success-about-image.webp" alt="home-reputable-success-about-image" height={420} width={650} />
                    </Col>
                    <Col md="6">
                        <p className={`${Style.desc}`}>
                        nodewap transform businesses with adaptable and powerful digital solutions that meet today’s needs and open up new opportunities for tomorrow.
                        </p>
                        <h6 className="pt-4">Nodewap</h6>
                        <p className="mb-5">/ Web design </p>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row style={{backgroundColor:'#F8F8F8'}} className="py-5 px-md-5 ">
                    <Col md="4">
                        <div className="d-flex">
                            <div className={`${Style.iconBox} d-flex justify-content-center align-items-center shadow`} style={{marginRight:"20px"}}>
                                <i className={`fa fa-smile-o ${Style.myIcon}` }></i>
                            </div>
                            <div className={`${Style.iconBoxText}`}>
                                <div><h2>1790</h2></div>
                                <div><p>HAPPY CLIENTS</p></div>
                            </div>
                        </div>
                    </Col>

                    <Col md="4">
                        <div className="d-flex">
                            <div className={`${Style.iconBox} d-flex justify-content-center align-items-center shadow`} style={{marginRight:"20px"}}>
                                <i className={`fa fa-folder-open-o ${Style.myIcon}` }></i>
                            </div>
                            <div className={`${Style.iconBoxText}`}>
                                <div><h2>920</h2></div>
                                <div><p>FINISHED PROJECTS</p></div>
                            </div>
                        </div>
                    </Col>

                    <Col md="4">
                        <div className="d-flex">
                            <div className={`${Style.iconBox} d-flex justify-content-center align-items-center shadow`} style={{marginRight:"20px"}}>
                                <i className={`fa fa-users ${Style.myIcon}` }></i>
                            </div>
                            <div className={`${Style.iconBoxText}`}>
                                <div><h2>245</h2></div>
                                <div><p>EXPERIENCED EXPERTS</p></div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </>
    );
}
export default Client;