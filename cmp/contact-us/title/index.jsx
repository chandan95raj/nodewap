import Style from "./title.module.css";
import {
  Container
}from "react-bootstrap";
import Link from "next/link";
const Title =()=>{
  return(
    <>
      <Container fluid className={`${Style.title_con}`}>
        <div>
          <h2 className={`${Style.title}`}>Contact us</h2>
          <ul className={`${Style.ul_con}`}>
            <li className={`${Style.li_con}`}><Link href="/" className={`${Style.a_home}`}>HOME</Link></li>
            <li className={`${Style.li_con}`}><Link href="/contact-us" className={`${Style.a_contact}`}> / CONTACT US</Link></li>
          </ul>
        </div>
      </Container>
    </>
  );
}
export default Title;
