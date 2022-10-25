import Style from "./header.module.css";
import{
    Container,
    Row,
    Col,
    Form,
    Button
} from "react-bootstrap";

import Image from "next/image";

const Header = ()=>{
    return (
        <>
         <Container fluid >
            <Row style={{paddingTop:"140px",paddingLeft:"80px"}}>
                <h1 className={`${Style.title}`}>Make your business easier </h1>
            </Row>

            <Row style={{paddingLeft:"80px"}}>
                <Col md="6" style={{paddingRight:"50px"}} >
                    <h1 className={`${Style.title}`}>with<span> nodwap </span> software company</h1>
                    <p className={`${Style.subTitle}`}>As a leading software company in India. We Provide Website designing, E-commerce website, Mobile app developement & SEO Optimization & Digital Marketing.</p>
                    <div className={`${Style.formTitleCont}`}>
                        <div className={`${Style.formTitleImg}`}>
                            <Image src="/green-curve-arrow.webp" width="54" height="51" />
                        </div>                        
                        <h5 className={`${Style.formTitle}`}>Booking is open today with profitable incentives for beginners.</h5>
                    </div>
                    <Form>
                        <div className="d-flex mb-3 justify-content-between">
                            <Form.Control type="email" className={`${Style.formInput}`} style={{width:"48%"}} name="email" placeholder="Email *" />
                            <Form.Select className={`${Style.formInput}`} style={{width:"48%"}} aria-label="Default select example">
                                <option>Select Department to email</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <Button className="btn-block form-control py-3" variant="primary">Get a free consultation</Button>
                    </Form>
                </Col>
                
                <Col md="6">
                    <Image 
                        src="/home-reputable-success.webp" 
                        width={630} 
                        height={740} 
                        alt="home-reputable-success"
                    />
                </Col>
            </Row>
         </Container>
        </>
    );
}
export default Header;