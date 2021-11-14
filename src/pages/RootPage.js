import React from "react";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Container, ListGroup} from "react-bootstrap";
import { logout } from "../features/userSlice";
import Navigation from "../component/navigation/Navbar";
import HomePage from "./HomePage";
import PostFeedback from "../component/feedback/postFeedback/PostFeedback";
import FeedbackDetail from "../component/feedback/FeedbackDetail";
import Profile from "../component/profile";
import SelfFeedbackList from "../component/feedback/SelfFeedbackList";
import SelfFeedbackDetail from "../component/feedback/SelfFeedbackDetail";
import NotFound from "../component/NotFound";
import EmployeeList from "../component/employee/EmployeeList";

const RootPage = () => {
    const dispatch = useDispatch();
    let user = useSelector((state) => state.user);

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
                        <div className="col-md-4 col-lg-2" id="leftbar">
                            <ListGroup className="sideNavBar">
                                <ListGroup.Item><Link to="/">Home</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="/self-feedbacks">My Feedbacks</Link></ListGroup.Item>
                                {user.user.isAdmin && <ListGroup.Item><Link to="/employee">Employee</Link></ListGroup.Item>}
                                <ListGroup.Item><Link to="/profile">Profile</Link></ListGroup.Item>
                                <ListGroup.Item><span className="text-danger" id="logoutTxt" onClick={handleLogout}>Logout</span></ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div className="col-lg-10 col-md-8" id="rightbar">
                            <div className="w-90 mx-auto">
                                <Routes>
                                    <Route exact path="/" element={<HomePage/>}/>
                                    <Route exact path="/feedback-detail/:id" element={<FeedbackDetail/>}/>
                                    <Route exact path="/create-feedback" element={<PostFeedback/>}/>
                                    <Route exact path="/profile" element={<Profile/>}/>
                                    <Route exact path="/self-feedbacks" element={<SelfFeedbackList/>}/>
                                    <Route exact path="/self-feedback-detail/:id" element={<SelfFeedbackDetail/>}/>
                                    <Route exact path="/employee" element={<EmployeeList/>}/>
                                    <Route exact path="*" element={<NotFound/>}/>
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