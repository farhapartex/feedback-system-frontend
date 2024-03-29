import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Profile = ()=>{

    let userState = useSelector((state) => state.user);
    let user = null;

    if(!userState || (userState && !userState.isLoggedIn && !userState.user)){
        user = JSON.parse(localStorage.getItem("user"));        
    }
    else{
        user = userState.user;
    }

    const [firstName, setFirstName] = useState("Md Nazmul");
    const [lastName, setLastName] = useState("Hasan");
    const [isShowError, setIsShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isShowSuccess, setIsShowSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleValidation = ()=>{
        if(!firstName || firstName.length === 0 || !lastName || lastName.length === 0){
            let errorMessageList = [];

            if(!firstName || firstName.length === 0){
                errorMessageList.push("First name is missing");
            }

            if(!lastName || lastName.length === 0){
                errorMessageList.push("Last name is missing");
            }

            return errorMessageList.join(", ");
        }
        
        return "";
    };

    const handleProfileUpdate = ()=>{
        const validationResponse = handleValidation();

        if(validationResponse && validationResponse.length > 0){
            setIsShowSuccess(false);
            setSuccessMessage("");

            setIsShowError(true);
            setErrorMessage(validationResponse);
        }else{
            setIsShowSuccess(true);
            setSuccessMessage("Profile updated");

            setIsShowError(false);
            setErrorMessage("");
        }
    };

    const SuccessBanner = ()=>{
        return <Alert variant="info" onClose={() => setIsShowSuccess(false)} dismissible>{successMessage}</Alert>
    };

    const ErrorBanner = ()=>{
        return <Alert variant="danger" onClose={() => setIsShowError(false)} dismissible>{errorMessage}</Alert>
    };

    return (
        <div className="w-75" id="profileBlock">

            <Container fluid>
                {isShowError && <ErrorBanner/> }
                {isShowSuccess && <SuccessBanner/> }

                <div className="w-100">
                    <h5>Profile</h5>
                </div>
                <div className="row mt-4">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                        </Form.Group>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                        </Form.Group>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={user.email} readOnly/>
                        </Form.Group>
                    </div>

                    <div className="col-12 mt-3">
                        <Button varient="warning" className="btn-warning" onClick={handleProfileUpdate}>Update</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Profile;