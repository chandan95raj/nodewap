import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import ContactTitle from "./contact-title/index";
import ContactSection from "./contact-section/index";
import ContactInfo from "./contact-info/index";
import ContactAction from "./contact-action/index";
const Contact = () =>{
  const design =(
    <>
    <Navbar />
   <ContactTitle />
   <ContactSection />
   <ContactInfo />
   <ContactAction />
    <Footer />
    </>
  );
  return design;
}
export default Contact;
