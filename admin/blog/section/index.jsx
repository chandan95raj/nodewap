import Style from "./section.module.css";
import Image from "next/image";
import { Button, Card, Container, Table, Modal, Form } from "react-bootstrap";
import data from "../../../cmp/blog/recentpost/blog.json";
import { useState } from 'react';

const Section = ()=>{
    const[modalState,changeModalState] = useState(false);
    const[formState,changeFormState] = useState([]);
    const[input,setInput] = useState(
        {        
            username:'',
            title:'',
            desc:''
        }
    )
    const allData= {};
    const getData =(e)=>{
        e.preventDefault();        
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
    }
    const setInputValue = (e)=>{
        const input = e.target;
        const value = input.value;
        const key = input.name;
        return setInput((oldData)=>{
           return {
            ...oldData
            [key] = value
           }          
        });
    }
    const editBlog = (data) =>{
        let index = data.index;
        sessionStorage.setItem('rowIndex',index);
        return(
            setInput(data),            
            changeModalState(true)                        
        );        
    }
    const updateBlog =(e)=>{
        getData(e);
        let index =  sessionStorage.getItem('rowIndex');
        let tmp = [...formState];
        tmp[index] = allData;
        return(
            console.log(tmp),
            changeModalState(false)
        );
    }
    const deleteBlog =(index)=>{
        alert(index);
    }
    const Tr =(data)=>{
        return(
            <>
            <tr>
                <td>{data.allData.index+1}.</td>
                <td className="overflow-hidden d-flex align-items-center">
                    <div className="pe-3">
                        <Image 
                            src={data.allData.imagePath}
                            width={50}
                            height={50}
                            alt='blog-img'
                            className="rounded-circle"
                        />
                    </div>
                    {data.allData.title.slice(0, 5)}
                </td>
                <td>{data.allData.username}</td>
                <td>Comment</td>
                <td>
                    <div className="d-flex">
                        <Button  onClick={()=>editBlog(data.allData)}  className='badge me-2' variant="info"><i className="fa fa-edit"></i></Button>
                        <Button onClick={()=>deleteBlog(data.allData.index)} className='badge' variant="danger"><i className="fa fa-trash"></i></Button>
                    </div>                                
                </td>
                </tr>
            </>
        );
    }
    return(
        <>
            <Container fluid >
            <Modal show={modalState} style={{marginTop:'50px'}}>
                    <Modal.Header closeButton onHide={()=>changeModalState(false)}>
                        <Modal.Title className={`${Style.headermodal} p-0 m-0`}>Edit Blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={updateBlog}>
                            <Form.Group className='mb-3'>
                                <Form.Control type='file' accept="image/*" name='picture'/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' value={input.username} onChange={setInputValue} name='username' placeholder="Author Name" />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' value={input.title} onChange={setInputValue}  name='title' placeholder="Blog Title" />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <textarea className='form-control' value={input.desc} onChange={setInputValue} name="desc" rows="5" placeholder='write your blog here'></textarea>
                            </Form.Group>
                            <Button className={`${Style.submitBtn} mt-2`} type='submit' variant="success">Save</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                <Card className="shadow-sm my-3 p-3">
                    <div className="table-responsive">               
                        <Table hover >
                            <thead>
                                <tr>
                                <th>S/No</th>
                                <th>Blog</th>
                                <th>Author</th>
                                <th>Comment</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                            {
                                data.map((item,index)=>{
                                    item['index'] = index;
                                    return <Tr allData={item} key={index} />
                                })
                            }                             

                            </tbody>
                        </Table>
                    </div> 
                </Card>
            </Container>
        </>
    );
}
export default Section;