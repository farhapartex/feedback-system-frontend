import React, {useState} from "react";
import {Form, Button, Alert} from "react-bootstrap";


const FeedbackCommentForm = () =>{

    const [comment, setComment] = useState("");
    const [isShowError, setIsShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validateForm = ()=>{
        if(!comment || comment.length === 0){
            setIsShowError(true);
            setErrorMessage("Comment is missing");
        }
        else{
            // TODO
            setIsShowError(false);
            setErrorMessage("");
        }
    }

    return (
        <div className="w-100 mt-4">
            { isShowError && <Alert className="mt-3" variant="danger" onClick={()=>{setIsShowError(false)}} dismissible>{errorMessage}</Alert>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Post your comment</Form.Label>
                <Form.Control type="email" placeholder="Type comment ..." onChange={(e)=>{setComment(e.target.value)}} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={()=>{validateForm()}}>
                Submit
            </Button>
        </div>
    )
}

export default FeedbackCommentForm;