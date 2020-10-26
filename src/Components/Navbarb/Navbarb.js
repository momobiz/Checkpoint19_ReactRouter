import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 

const Navbarb = () => {
    return (
        <div>
             <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                    <Link to="/">  Home </Link>
                
                    
                    </Nav>
                    
                </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

export default Navbarb;
