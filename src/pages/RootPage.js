import React, {Component} from "react";
import {Routes, Route} from "react-router-dom";
import Navigation from "../component/navigation/Navbar";
import HomePage from "./HomePage";
import PostFeedback from "../component/feedback/postFeedback/PostFeedback";

class RootPage extends Component{
    render(){
        return (
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/post-feedback" element={<PostFeedback/>}/>
                </Routes>
            </div>
        )
    }
}

export default RootPage;