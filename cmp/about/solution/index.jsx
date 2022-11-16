import Style from "./solution.module.css";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
const Solution = ()=>{
  return(
    <>

       <Container fluid className={` py-5 ${Style.backDiv}`} >
       <Row>
         <Col md="6">
           <img src="/laptop.png"
            width="100%"
            alt="laptop"
            />
         </Col>
       <Col md="6" className="d-flex align-items-center py-5 mt-0 pe-0">
          <div>
              <div className={` ms-5 ${Style.ourSolution}`}>
                         <img src={`/shape_line.png`} width={30} height={10}   />
                         <span className={`${Style.solutionTitle}`}> OUR SOLUTION</span>
                         <h2 className={`my-3 text-light ${Style.solveHeading}`}>
                            How do we manage <br />
                            IT services for your industry</h2>
                      </div>
                             <div>
                                    <img src="/arrow.png" width="55px" height="20px" className={`${Style.arrow1}`} />
                                    <span className={`text-light ${Style.receive}`}> Receive Custom Plan</span>
                                    <p className={`text-light ms-5 ${Style.desc}`}>Arose mr rapid in so vexed words. Gay welcome led add <br />lasting chiefly say looking better performing renovation.</p>

                             </div>
                             <div>
                                <img src="/arrow.png" width="55px" height="20px" className={`${Style.arrow2}`} />
                                <span className={`text-light ${Style.pro}`}> Deliver expected project</span>
                                <p className={`text-light ms-5 ${Style.desc}`}>Arose mr rapid in so vexed words. Gay welcome led add <br />lasting chiefly say looking better exicution</p>
                                 <hr className={` text-light ms-5 ${Style.horizantal}`}/>
                            </div>

                            <Row   className={`me-0 ms-5 w-100 ${Style.iconBox}`}>
                                      <Col md="6" className="d-flex   align-items-center p-0 me-0  ">
                                              <i aria-hidden="true" className={`fa fa-comments ${Style.commentIcon}`}></i>
                                              <span className={`ms-3 text-light ${Style.question}`}>Have any Questions?</span>
                                           </Col>
                                           <Col md="6" className="d-flex  align-items-center my-3  p-0">
                                               <i aria-hidden="true" className={`fa fa-play rounded-circle   ${Style.playIcon}`}></i>
                                                <span className="ms-3 text-light">WATCH PROCESS </span>
                                          </Col>
                                </Row>
            </div>

       </Col>
       </Row>
       </Container>

    </>
  );
}
export default Solution;
