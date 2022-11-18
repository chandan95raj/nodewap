import Style from "./addblog.module.css";
import { Button, Card, Container, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import allBlogs from "../../../cmp/blog/recentpost/blog.json";
const AddBlog = ()=>{
    const[modalState,changeModalState] = useState(false);
    const getData =(e)=>{
        e.preventDefault();  
        const allData= {};      
        const form = e.target;
        const formData = new FormData(form);
        for(let data of formData.entries())
        {
            let key = data[0];
            let value = data[1];
            if(typeof value === 'object'){
                value = URL.createObjectURL(value);
            }
            allData[key]= value;
        }  
        console.log(allData);        
    }
    return(
        <>
            <Container fluid>
                <div className={`d-flex justify-content-between align-items-center `}>
                    <h1 className={`p-0 m-0`} style={{fontSize:'22px', fontWeight:'600'}}>Blog</h1>                     
                    <Button onClick={()=>changeModalState(true)} className={`px-3 py-2`}> 
                        <i className={`fa fa-user-plus`}></i> Add Blog
                    </Button>                    
                </div>                
                <hr />
                <Modal show={modalState} style={{marginTop:'50px'}}>
                    <Modal.Header closeButton onHide={()=>changeModalState(false)}>
                        <Modal.Title className={`${Style.headermodal} p-0 m-0`}>Add New Blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={getData}>
                            <Form.Group className='mb-3'>
                                <Form.Control type='file' accept="image/*" name='picture'/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' name='username' placeholder="Author Name" />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' name='blogTitle' placeholder="Blog Title" />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <textarea className='form-control' name="blogItem" rows="5" placeholder='write your blog here'></textarea>
                            </Form.Group>
                            <Button className={`${Style.submitBtn} mt-2`} type='submit' variant="success">Add Blog</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                <Card className='p-3 shadow-sm'>
                    <div className=" d-flex justify-content-between align-items-center flex-wrap">
                        <div className='d-flex align-items-center'>
                            <div>
                                <h4 className='p-0 m-0 me-2' style={{fontSize:'46px',fontWeight:'600' }}>{allBlogs.length}</h4>
                            </div>
                            <div>
                                <p className='p-0 m-0'>Total blogs</p>
                            </div>
                        </div>
                        <div>
                            <Form >
                                <div className={`position-relative d-flex justify-content-center align-items-center ${Style.searchBox}`}>
                                    <i className="fa fa-search position-absolute" style={{left:"20px"}}></i>
                                    <Form.Control type="search" placeholder="Search blogs" />
                                </div>
                            </Form>
                        </div>
                        <div className={`d-flex ${Style.customButton}`}>
                            <Button className="me-4" variant="outline-dark"><i className="fa fa-download"></i> Export <i className="fa fa-chevron-down" aria-hidden="true"></i></Button>
                            <Button variant="outline-dark"><i className="fa fa-bars"></i> Filter </Button>
                        </div>
                    </div>
                </Card>
            </Container>
        </>
    );
}
export default AddBlog;