import React, {useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import FeedbackQuestion from "./FeedbackQUestion";

const PostFeedback = ()=> {
    const [feedbackValues, setFeedbackValues] = useState([{ question: "", option1 : "", option2 : "", option3 : "", option4 : ""}])

    const addFeedbackForm = ()=> {
        setFeedbackValues([...feedbackValues, { question: "", option1 : "", option2 : "", option3 : "", option4 : ""}])
    }

    let handleChange = (index, e) => {
        let newFormValues = [...feedbackValues];
        newFormValues[index][e.target.name] = e.target.value;
        setFeedbackValues(newFormValues);
     }


    return (
        <div>
            <Container fluid id="postFContainer">
                <h5>Create Feedback</h5>
                <div className="row feedbackFormBlock">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Form.Group className="mb-3" controlId="feedbackTopic">
                            <Form.Label>Select Department <span className="text-danger">*</span></Form.Label>
                            <Form.Select aria-label="Floating label select example">
                                <option value="Marketing">Marketing</option>
                                <option value="Engineering">Engineering</option>
                                <option value="HR">Hr & Admin</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <Form.Group className="mb-3" controlId="feedbackTopic">
                            <Form.Label>Feedback Topic <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter topic ..." />
                        </Form.Group>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <Form.Group className="mb-3" controlId="feedbackDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" row={4} placeholder="Enter description ..." />
                        </Form.Group>
                    </div>
                </div>

                
                <div className="row mt-4 mb-5">
                    <div className="col-12">
                        <Button className="margin-r1" variant="secondary" onClick={()=>{addFeedbackForm()}}>Add Question</Button>
                        <Button variant="primary" className="ml-4">Submit</Button>
                    </div>
                </div>
                <h5 className="mt-4">Feedback Questions</h5>
                { feedbackValues.map((element, index) => (
                    <FeedbackQuestion key={index} index={index} element={element} handleChange={handleChange}/>
                ))}
            </Container>
        </div>
    )
}

export default PostFeedback;