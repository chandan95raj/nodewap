import Style from './itservice.module.css';
import Link from "next/link";
const ItService = ()=>{
    return(
        <>
            <div className={` ${Style.mainImage} animate__animated animate__fadeIn d-flex align-items-center justify-content-center contaner-fluid`}>
            <div className={Style.opacityDiv}></div> 
                <div className={`text-center`} style={{position:'absolute'}}>
                    <h1 className={`${Style.head_service}`}>IT Services</h1>
                    <div>
                        <Link href="/"><span className={`${Style.home}`}>HOME</span></Link>
                        <span className={`${Style.it_service}`}> <i className={`fa fa-angle-right`} style={{color:'white', fontSize:'17px'}}></i> SERVICES</span>
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default ItService;
