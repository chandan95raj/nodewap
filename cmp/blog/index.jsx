import NavbarCont from '../layout/navbar'
import BlogUpadate from './blogUpdate';
import Footer from '../layout/footer';


const Blog = ()=>{
    const design = (
        <>
          <NavbarCont  />
          <BlogUpadate />
          <Footer />
        </>
    );
    return design;
}
export default Blog;