import Style from "./style.module.css";
import {
  Container
 } from "react-bootstrap";
   const AllContactus =()=>{
   const design =(
  <>
<Container fluid className={`${Style.title_con}`}>
<div>
<h2 className={`${Style.title}`}>Contact us</h2>
<ul className={`${Style.ul_con}`}>
<li className={`${Style.li_con}`}><a href="#" className={`${Style.a_home}`}>HOME</a></li>
<li className={`${Style.li_con}`}><a href="#" className={`${Style.a_contact}`}> / CONTACT US</a></li>
</ul>
</div>
</Container>
</>
);
return design;
}
export default AllContactus;
