import React, {Component} from "react";
import {Routes, Route} from "react-router-dom";
import {Container, ListGroup} from "react-bootstrap";
import Navigation from "../component/navigation/Navbar";
import HomePage from "./HomePage";
import PostFeedback from "../component/feedback/postFeedback/PostFeedback";
import FeedbackDetail from "../component/feedback/FeedbackDetail";

class RootPage extends Component{
    render(){
        return (
            <div>
                <Navigation />
                <div id="appRootBlock">
                    <Container fluid>
                        <div className="row">
                            <div className="col-2">
                                <ListGroup>
                                    <ListGroup.Item>Feedbacks</ListGroup.Item>
                                    <ListGroup.Item>Profile</ListGroup.Item>
                                    <ListGroup.Item>Logout</ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div className="col-10">
                                <Routes>
                                    <Route path="/" element={<HomePage/>}/>
                                    <Route path="/feedback-detail/:id" element={<FeedbackDetail/>}/>
                                    <Route path="/post-feedback" element={<PostFeedback/>}/>
                                </Routes>
                            </div>
                        </div>
                    </Container>
                </div>
                
            </div>
        )
    }
}

export default RootPage;