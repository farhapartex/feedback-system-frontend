import React from "react";
import Proptypes from "prop-types";
import { Form } from "react-bootstrap";

const FeedbackQuestion = (props)=> {
    const {index, element, handleChange} = props;

    return (
        <div className="row feedbackFormBlock">
            <div className="col-lg-12  col-sm-12">
                <Form.Group className="mb-3" controlId="feedbackDescription">
                    <Form.Label>Question</Form.Label>
                    <Form.Control type="text" value={element.question} onChange={(e) => {handleChange(index, e)}} placeholder="Enter question ..." />
                </Form.Group>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <Form.Group className="mb-3" controlId="feedbackDescription">
                    <Form.Label>Option 1</Form.Label>
                    <Form.Control type="text" value={element.option1} onChange={(e) => {handleChange(index, e)}} placeholder="Enter option ..." />
                </Form.Group>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <Form.Group className="mb-3" controlId="feedbackDescription">
                    <Form.Label>Option 2</Form.Label>
                    <Form.Control type="text" value={element.option2} onChange={(e) => {handleChange(index, e)}} placeholder="Enter option ..." />
                </Form.Group>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <Form.Group className="mb-3" controlId="feedbackDescription">
                    <Form.Label>Option 3</Form.Label>
                    <Form.Control type="text" value={element.option3} onChange={(e) => {handleChange(index, e)}} placeholder="Enter option ..." />
                </Form.Group>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <Form.Group className="mb-3" controlId="feedbackDescription">
                    <Form.Label>Option 4</Form.Label>
                    <Form.Control type="text" value={element.option4} onChange={(e) => {handleChange(index, e)}} placeholder="Enter option ..." />
                </Form.Group>
            </div>
        </div>
    )
}

FeedbackQuestion.propTypes = {
    element: Proptypes.object,
    handleChange: Proptypes.func
}

FeedbackQuestion.defaultProps = {
    element: {question: "", option1: "", option2: "", option3: "", option4: ""},
    handleChange: ()=>{}
}

export default FeedbackQuestion;