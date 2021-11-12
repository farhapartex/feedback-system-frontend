import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/userSlice";
import { Navbar, Nav, Container } from 'react-bootstrap';


const Navigation = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch(logout());
        navigate('/');
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Employee Feedback</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/post-feedback">Post Feedback</Nav.Link>
                    <Nav.Link href="/" className="text-danger" onClick={handleLogout}>Logout</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation;