import React, { useState } from "react"
import { Modal, Button, Container, Form, Alert } from "react-bootstrap";

const EmployeeInviteModal = (props) => {
    const {show, onHide} = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [designation, setDesignation] = useState("");
    const [email, setEmail] = useState("");
    const [isShowError, setIsShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isShowSuccess, setIsShowMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const validateEmail = (email) =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validation = ()=>{
        let errorList = []
        if(!firstName || firstName.length === 0){
            errorList.push("First name is missing");
        }
        if(!lastName || lastName.length === 0){
            errorList.push("Last name is missing");
        }
        if(!designation || designation.length === 0){
            errorList.push("Designation is missing");
        }
        if(!email || email.length === 0){
            errorList.push("Email is missing");
        }
        if(email && !validateEmail(email)){
            errorList.push("Email is not valid");
        }

        return errorList.join(", ");
    }
    const handleSendInvitation = ()=>{
        const validationResp = validation();
        if(validationResp){
            setIsShowMessage(false);
            setSuccessMessage("");
            setIsShowError(true);
            setErrorMessage(validationResp);
            return;
        }
        // DO API call if not error
        setErrorMessage("");
        setIsShowError(false);
        setIsShowMessage(true);
        setSuccessMessage(firstName + " has been sent invitation email");
        setFirstName("");
        setLastName("");
        setDesignation("");
        setEmail("");
    }

    const closeErrorBanner = ()=>{
        setErrorMessage("");
        setIsShowError(false);
    }

    const closeSuccessBanner = ()=>{
        setIsShowMessage(false);
        setSuccessMessage("");
    }

    const ErrorBanner = ()=>{
        return <Alert variant="danger" onClose={()=>{closeErrorBanner()}} dismissible>{errorMessage}</Alert>
    }

    const SuccessBanner = ()=>{
        return <Alert variant="info" onClose={()=>{closeSuccessBanner()}} dismissible>{successMessage}</Alert>
    }

    return (
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Invite Employee
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {isShowError && <ErrorBanner/> }
              {isShowSuccess && <SuccessBanner/> }
            <Container fluid>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
                        </Form.Group>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
                        </Form.Group>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" value={designation} onChange={(e)=>{setDesignation(e.target.value)}} />
                        </Form.Group>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </Form.Group>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Button variant="primary" onClick={()=>{handleSendInvitation()}}>Send Invitation</Button>
                        </Form.Group>
                    </div>
                </div>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}


export default EmployeeInviteModal;