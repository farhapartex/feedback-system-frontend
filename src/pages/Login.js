import React, {Component} from "react";
import { Button, Form } from 'react-bootstrap';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        
    }


    render(){
        return (
            <div id="loginPage">
                <div id="login-block">
                    <h4 className="text-center mb-3">Login</h4>
                    <Form.Group className="mb-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={this.state.email} onChange={(e)=>{this.setState({email: e.target.value})}}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e)=>{this.setState({password: e.target.value})}}></Form.Control>
                    </Form.Group>
                    <Button className="mt-3 w-100" varient="primary">Login</Button>
                </div>
            </div>
        )
    }
}


export default Login;