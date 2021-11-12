import React, {Component} from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';


class Navigation extends Component{
    render(){
        return (
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">Employee Feedback</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Post Feedback</Nav.Link>
                        <Nav.Link href="#link" className="text-danger">Logout</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}


export default Navigation;