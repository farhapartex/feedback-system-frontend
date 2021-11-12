import React, {Component} from "react";
import {Routes, Route} from "react-router-dom";
import Navigation from "../component/navigation/Navbar";
import HomePage from "./HomePage";


class RootPage extends Component{
    render(){
        return (
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </div>
        )
    }
}

export default RootPage;