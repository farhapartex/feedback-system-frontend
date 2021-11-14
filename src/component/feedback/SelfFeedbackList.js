import React from "react";
import FeedbackList from "./FeedbackList";

const SelfFeedbackList = () => {
    
        return (
            <div className="w-100">
                <h5 className="mb-4">My Feedbacks</h5> 
                <FeedbackList type="self"/>
            </div>
        )
}

export default SelfFeedbackList;