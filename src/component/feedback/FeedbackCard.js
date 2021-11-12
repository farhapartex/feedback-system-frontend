import React, {Component} from "react";
import {ListGroup,} from "react-bootstrap";

class FeedbackCard extends Component{
    render(){
        return (
            <div className="w-100">
                <h5>Where does it come from?</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its 
                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
                    using ...</p>
                <ul id="feedbackInsight">
                    <li>Supperter: 125</li>
                    <li>Not Resolved Yet</li>
                </ul>
            </div>
        )
    }
}

export default FeedbackCard;