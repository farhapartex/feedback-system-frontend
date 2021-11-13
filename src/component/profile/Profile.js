import React from "react";
import { Container, Form, Button } from 'react-bootstrap';

const Profile = ()=>{
    return (
        <div className="w-100">
            

            <Container fluid>
                <div className="w-100">
                    <h5>Profile</h5>
                </div>
                <div className="row mt-4">
                    <div className="col-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value="Md Nazmul"/>
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value="Hasan"/>
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value="hasan@gmail.com" readOnly/>
                        </Form.Group>
                    </div>

                    <div className="col-12 mt-3">
                        <Button varient="warning" className="btn-warning">Update</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Profile;