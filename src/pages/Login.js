import React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Alert } from 'react-bootstrap';
import { login } from "../features/userSlice";

const Login = ()=>{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowErrorMsg, setIsShowErrorMsg] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();

    const handleLogin = () => {

        const data = [
            {field: "Email", value: email},
            {field: "Password", value: password}
        ]

        const response = formValidation(data);
        if (response){
            setIsShowErrorMsg(true);
            setErrorMessage(response);

            return;
        }
        const requestBody = {
            email: email,
            password: password,
            isLoggedIn: true,
            isAdmin: email !== "admin@abcxyz.com" ? false : true
        }

        dispatch(login(requestBody));
    }

    const validateEmail = (email) =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const formValidation = (fieldList)=>{
        const errorList = []
        
        fieldList.forEach((item, index) =>{
            if(! item.value || item.length === 0){
                errorList.push(item.field + " is missing")
            }
            else if(item.field === "Email" && !validateEmail(item.value)){
                errorList.push(item.field + " is not valid.")
            }
        });

        return errorList.join(", ")

    }


    return (
        <div id="loginPage">
            <div id="login-block">
                <h4 className="text-center mb-3">Login</h4>
                <Form.Group className="mb-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={email} onChange={(e)=> setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=> setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button className="mt-3 w-100" varient="primary" onClick={handleLogin}>Login</Button>
                { isShowErrorMsg && <Alert className="mt-3" variant="danger">{errorMessage}</Alert>}
            </div>
        </div>
    );
}


export default Login;