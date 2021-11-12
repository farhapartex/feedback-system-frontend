import React, {Component} from "react";
import TextField from "../textField";
import PropTypes from "prop-types";

class TextFieldGroup extends Component{
    render(){
        const {type, label, className, id, onChange, value, placeholder} = this.props;

        return (
            <div className="form-group">
                <label>{label}</label>
                <TextField type={type} id={id} className={className} value={value} placeholder={placeholder} onChange={onChange}/>
            </div>
        )
    }
}

TextFieldGroup.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

TextFieldGroup.defaultProps = {
    type: "text",
    label: "",
    className: "form-control",
    value: "",
    placeholder: "",
    onChange: ()=>{}
}

export default TextFieldGroup;