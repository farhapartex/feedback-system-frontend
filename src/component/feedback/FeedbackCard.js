import React, {Component} from "react";
import { Link } from "react-router-dom";

class FeedbackCard extends Component{
    renderReviewer = ()=>{
        if(this.props.reviewer){
            return "Reviewed by: " + this.props.reviewer
        }
        else{
            return "Not Resolved Yet"
        }
    }


    render(){
        const {title, shortDescription, supporter} = this.props;
        return (
            <div className="w-100">
                <h5><Link to={"feedback-detail/"+ 1} id="f-card-title">{title}</Link></h5>
                <p>{shortDescription}...</p>
                <ul id="feedbackInsight">
                    <li>Total Vote: {supporter}</li>
                    <li>{this.renderReviewer()}</li>
                </ul>
            </div>
        )
    }
}

export default FeedbackCard;