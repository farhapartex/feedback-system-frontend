import React, {Component} from "react";
import PropTypes from "prop-types";

class TextField extends Component{

    render(){
        const {type, className, id, onChange, value, placeholder} = this.props;
        return (
            <input type={type} className={className} id={id} onChange={onChange} value={value} placeholder={placeholder}/>
        )
    }
}

TextField.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange:PropTypes.func
}

TextField.defaultProps = {
    type: "text",
    className: "form-control",
    value: "",
    placeholder: "",
    onChange: ()=>{}
}



export default TextField;