import Style from './costomer.module.css';
import {
   Container,
   Row,
   Col
} from "react-bootstrap";
const Info = ()=>{
  return(
    <>
    <div className={`container-fluid `}>
          <div className={`row mb-4 py-5 d-flex px-lg-4 p-2 ${Style.downdiv} `}>
              <div className={`col-md-6 ${Style.bgdiv}` }>
                  <div className={`${Style.imgDiv}`}>
                      <div className={`${Style.imgOpacity}`}></div>
                      <div className={`${Style.stisfection}`}>
                          <div className={`row h-100  d-flex align-items-center`}>
                              <div className={`col-md-4  d-flex justify-content-end ${Style.colround}`}>
                                  <div className={`${Style.roundDiv}`}>
                                  <h1 className={`${Style.h1percent}`}>85%</h1>
                                  </div>
                              </div>
                              <div className={`col-md-8 text-white`}>
                                  <div className={`${Style.custdiv}`} style={{position:'relative', paddingRight:'10px'}}>
                                  <h4 style={{fontWeight:'600'}}>Customer satisfaction</h4>
                                  <p style={{lineHeight:'27px', fontWeight:'580'}}>Pointure horrible margaret
                                   suitable he followed speedily.
                                   Indeed vanity excuse or mr lo
                                   vers of on. By offer scale an
                                   stuff. Blush be sorry no sight sa
                                   ng lose ecstatic and properly.
                                  </p>
                              </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className={`col-md-6`}>
                  <div className={`${Style.clint}`}>
                      <div className={`${Style.clintbg}  p-5 text-white `}>
                          <div>
                              <h1 style={{fontWeight:'600', fontSize:'60px'}}>45K</h1>
                              <h4 style={{fontWeight:'bold'}}>Customers worldwide</h4>
                              <p >Mentioning horrible margaret suitable
                                   he followed speedily. Indeed vanity
                                   excuse or mr lovers of on. By offer scale
                                   an stuff. Blush be sorry no properly</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  </div>
    </>
  );
}
export default Info;
