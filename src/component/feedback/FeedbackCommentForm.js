import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";


class FeedbackCommentForm extends Component{


    render(){
        return (
            <div className="w-100 mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Post your comment</Form.Label>
                    <Form.Control type="email" placeholder="Type comment ..." />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        )
    }
}

export default FeedbackCommentForm;