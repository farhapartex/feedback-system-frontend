import React, {Component} from "react";
import TextFieldGroup from "../component/common/textFieldGroup";

class Login extends Component{
    render(){
        return (
            <div id="loginPage">
                <div id="login-block">
                    <h4 className="text-center mb-3">Login</h4>
                    <TextFieldGroup type="text" label="Email" className="form-control" />
                    <TextFieldGroup type="password" label="Password" className="form-control" />
                </div>
            </div>
        )
    }
}


export default Login;