import React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from 'react-bootstrap';
import { login } from "../features/userSlice";

const Login = ()=>{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleLogin = () => {
        const requestBody = {
            email: email,
            password: password
        }

        dispatch(login(requestBody));
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
            </div>
        </div>
    );
}


export default Login;