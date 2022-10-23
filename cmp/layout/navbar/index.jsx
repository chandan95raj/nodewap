import Style from "./navbar.module.css";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from "react-bootstrap";

import data from "./menu.json";

import Link from "next/link";

const MenuDesign = (data)=>{
    const design =(
        <>
        <button className={` btn rounded-0 btn-white ${Style.mynav} mx-4`}>
            <Link href={data.menuInfo.url} passHref>{data.menuInfo.label}</Link>
        </button>           
        </>
    );
    return design;
}

const DropMenu = (data)=>{
    const design = (
        <>
        <NavDropdown className={`${Style.mynav} mx-4`} title={data.menuInfo.label} id="dropdown-container">
            {
                data.menuInfo.dropdownMenu.map((item,index)=>{
                    return <MenuDesign menuInfo={item} key={index} />;
                })
            }
        </NavDropdown>
        </>
    );
    return design;
}

const NavbarCont =()=>{
    const design = (
        <>
           <Navbar bg="white" expand="lg" className="shadow">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src="logo-dark.webp" width="160" height="47" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" justify-content-end w-100">
                       {
                            data.map((item,index)=>{
                                if(item.dropdown){
                                  return <DropMenu menuInfo={item} key={index} />
                                }
                                return <MenuDesign menuInfo={item} key={index} />
                            })
                       } 

                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar> 
        </>
    );
    return design;
}

export default NavbarCont;