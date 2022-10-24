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
        <button className={`btn btn-white rounded-0 ${Style.mynav} mx-4`}>
            <Link href={data.menuInfo.url} >{data.menuInfo.label}</Link>
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
                data.menuInfo.dropdownMenu.map((item)=>{
                    return <MenuDesign menuInfo={item} key={item.id} />;
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
                            data.map((item)=>{
                                if(item.dropdown){
                                  return <DropMenu menuInfo={item} key={item.id} />
                                }
                                return <MenuDesign menuInfo={item} key={item.id} />;
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
