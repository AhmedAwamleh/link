import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';


function NavPage() {

    return (

        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">home</Nav.Link>
                        <Nav.Link as={Link} to="/login">login</Nav.Link>
                        <Nav.Link as={Link} to="/logout">logout</Nav.Link>


                    </Nav>

                </Container>

            </Navbar>

            <Outlet />


        </>

    )
}

export default NavPage



