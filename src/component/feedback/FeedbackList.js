import React, {Component} from "react";
import {ListGroup,} from "react-bootstrap";
import FeedbackCard from "./FeedbackCard";

class FeedbackList extends Component{
    render(){
        return (
            <div className="" id="feedbackListBlock">
                <ListGroup>
                    <ListGroup.Item><FeedbackCard /></ListGroup.Item>
                    <ListGroup.Item><FeedbackCard /></ListGroup.Item>
                    <ListGroup.Item><FeedbackCard /></ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default FeedbackList;