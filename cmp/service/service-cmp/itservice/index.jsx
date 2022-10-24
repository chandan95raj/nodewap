import Style from './itservice.module.css';

const ItService = ()=>{
    return(
        <>
            <div className={` ${Style.mainImage} d-flex align-items-center justify-content-center contaner-fluid mb-5`}>
                <div className={`text-center`}>
                    <h1 className={`${Style.head_service}`}>IT Services</h1>
                    <div>
                        <span className={`${Style.home}`}>HOME</span>
                        <span className={`${Style.it_service}`}> / IT SERVICES</span>
                    </div>
                </div>    
            </div>
        </>
    );
}
export default ItService;