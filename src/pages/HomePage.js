import React from "react";
import { useNavigate } from "react-router-dom";
import FeedbackList from "../component/feedback"
import { Button } from 'react-bootstrap';

const HomePage = () => {
    const navigate = useNavigate();
    
    const handleCreateNavigation = ()=>{
        navigate('/create-feedback');
    }
    
        return (
            <div>
                <div className="w-90 mx-auto mb-3">
                    <Button variant="primary" className="float-right" onClick={()=>{handleCreateNavigation()}}>Create Feedback</Button>
                </div>
                
                <FeedbackList />
            </div>
        )
}

export default HomePage;