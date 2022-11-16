import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import Style from "./ourgoal.module.css";
const OurGoal = ()=>{
return(
  <>
 <Container   className={` my-5 pb-5 mb-0 ${Style.bgCon}`}>

  <Row className="mt-2 p-0">
        <Col md="6">
                  <div>
                    <img src="/shape_line.png"
                      alt="ourbg"
                      heigh={35}
                      width={50}
                      />
                      <span className={`${Style.span}`}> WHY CHOOSE US</span>
                       <h2 className={`font-weight-bold mt-3 ${Style.mainTitle}`}>
                        Our goal is giving the <br/>
                        best our customers
                       </h2>
                       <p className="mt-4">Jennings appetite disposed me an at subjects an.
                        To no indulgence diminution so discovered mr apartments.
                        Are off under folly death wrote cause her way spite.
                        Plan upon yet way get cold spot its week. Almost do am or limits hearts.
                        Arose mr rapid in so vexed words.
                        Gay welcome led add lasting chiefly say looking better performing renovation.</p>
                        <button className="btn btn-primary p-2 mt-4">Know More</button>
                    </div>
        </Col>

       <Col md="6" className={` d-flex justify-content-center align-items-center ${Style.Allbox}`}>
                 <div   className={`my-3 col-md-12 rounded-5 border w-50 d-flex  justify-content-center align-items-center text-center py-5 mt-5 me-4 bg-light mx-0 ${Style.dataBox}`}>
                     <div className={`my-3`}>
                               <img src="/core.png"
                                 width={114}
                                 height={100}
                                   />
                               <br />
                               <p className={`pt-2 my-2 ${Style.title}`}>DATABASE</p>
                               <h4 className={`${Style.heading}`}>Secure database</h4>
                               <a href="#">READ MORE</a>
                      </div>
                 </div>
                 <div   className={`rounded-5 col-md-12 border w-50 d-flex justify-content-center align-items-center text-center py-5 mt-0 ms-2  mx-0 ${Style.perfomanceBox}`} >
                           <div>
                              <img src="/flesh.png"
                                 width={100}
                                 height={100}
                                 />
                               <p className={`pt-2 my-2 ${Style.title}`}>PERFORMANCE</p>
                               <h4 className={`${Style.heading}`}>Incredible <br />Performance</h4>
                              <a href="#">READ MORE</a>
                            </div>
                    </div>
         </Col>
  </Row>

 </Container>
  </>
);

}
export default OurGoal;
