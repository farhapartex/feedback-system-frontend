import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { logout } from "../../features/userSlice";


const Navigation = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                <Nav className="mx-auto" id="minimizeNav">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/self-feedbacks">My Feedback</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/" onClick={handleLogout} className="text-danger">Logout</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation;