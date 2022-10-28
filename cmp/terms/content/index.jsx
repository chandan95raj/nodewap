import Style from './content.module.css';
import {
    Container,
    Card
} from "react-bootstrap";
const Content = ()=>{
    return(
        <>
            <Container className="mb-5">
                <div className={`shadow p-4 ${Style.content}`} >
                    <h5>How do we use your information?</h5>
                    <h6>
                        We do not sell your personal information to others. The personally identifiable Information you submit to receive information and services from our website will never be disclosed to any third party. We use this personally identifiable information to register you to access our services and verify your authority to access the courses and services. We use the collected information to improve our website and to send you relevant information about our products and services which we think may be of interest to you. If you have subscribed for a service on our website, then your personally identifiable information may be used to enable us to serve you better. We use the collected website information such as your usage patterns and how you access and use our products and services to help us improve our offerings and assist us in operating the website better. When you enroll in a course, we might share your personally identifiable information with instructors as part of the course information to help them provide the course to you. If you have enrolled for a course, we may seek your opinion and views in terms of testimonials to display on our website or in our social media channels. Unless you have informed us that you do not wish to receive further information about our products and services, we may send you direct promotional mails regarding our products and services. In case you don’t want us to feature your testimonials or don’t want to receive further information about our products or services, please notify us at nodewapitsolution@gmail.com
                    </h6>
                    <h5>How do we use your information?</h5>
                    <h6>
                        We do not sell your personal information to others. The personally identifiable Information you submit to receive information and services from our website will never be disclosed to any third party. We use this personally identifiable information to register you to access our services and verify your authority to access the courses and services. We use the collected information to improve our website and to send you relevant information about our products and services which we think may be of interest to you. If you have subscribed for a service on our website, then your personally identifiable information may be used to enable us to serve you better. We use the collected website information such as your usage patterns and how you access and use our products and services to help us improve our offerings and assist us in operating the website better. When you enroll in a course, we might share your personally identifiable information with instructors as part of the course information to help them provide the course to you. If you have enrolled for a course, we may seek your opinion and views in terms of testimonials to display on our website or in our social media channels. Unless you have informed us that you do not wish to receive further information about our products and services, we may send you direct promotional mails regarding our products and services. In case you don’t want us to feature your testimonials or don’t want to receive further information about our products or services, please notify us at nodewapitsolution@gmail.com
                    </h6>
                </div>
                
            </Container>
        </>
    );
}
export default Content;
