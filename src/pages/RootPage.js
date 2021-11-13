import React from "react";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {Container, ListGroup} from "react-bootstrap";
import { logout } from "../features/userSlice";
import Navigation from "../component/navigation/Navbar";
import HomePage from "./HomePage";
import PostFeedback from "../component/feedback/postFeedback/PostFeedback";
import FeedbackDetail from "../component/feedback/FeedbackDetail";
import Profile from "../component/profile/Profile";

const RootPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = ()=>{
        dispatch(logout());
        navigate('/');
    }

    return (
        <div>
            <Navigation />
            <div id="appRootBlock">
                <Container fluid>
                    <div className="row">
                        <div className="col-2">
                            <ListGroup className="sideNavBar">
                                <ListGroup.Item><Link to="/">Feedbacks</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="/profile">Profile</Link></ListGroup.Item>
                                <ListGroup.Item><span className="text-danger" id="logoutTxt" onClick={handleLogout}>Logout</span></ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div className="col-10">
                            <div className="w-90 mx-auto">
                                <Routes>
                                    <Route path="/" element={<HomePage/>}/>
                                    <Route path="/feedback-detail/:id" element={<FeedbackDetail/>}/>
                                    <Route path="/create-feedback" element={<PostFeedback/>}/>
                                    <Route path="/profile" element={<Profile/>}/>
                                </Routes>
                            </div>
                            
                        </div>
                    </div>
                </Container>
            </div>
            
        </div>
    )
}

export default RootPage;