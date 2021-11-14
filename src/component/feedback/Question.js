import React from "react";
import Proptypes from "prop-types";
import { Form } from "react-bootstrap";


const Question = (props)=> {
    const {id, question, type, name, labels} = props;

    const renderLabelList = ()=>{
        let labelList = [];
        labels.forEach((label,index) => {
            labelList.push(<Form.Check key={index} inline label={label} name={name} type={type} id={name+ index} />)
        });

        return labelList;
    }


    return (
        <div className="question-row">
            <p>#{id}: {question}</p>

            <div className="w-100">
                {renderLabelList()}
            </div>
        </div>
    )
}

Question.propTypes = {
    id: Proptypes.string,
    question: Proptypes.string,
    type: Proptypes.string,
    name: Proptypes.string,
    labels: Proptypes.array
}

Question.defaultProps = {
    id: "",
    question: "",
    type: "radio",
    name: "",
    labels: []
}

export default Question;