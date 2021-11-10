import React from "react";
import { useSelector } from "react-redux";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import RootPage from "./pages/RootPage";

function App() {
  const user = localStorage.getItem("user");
  console.log(user)

  if(user){
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<RootPage/>}/>
        </Routes>
      </div>
    );
  }
  else{
    return (
      <Login/>
    );
  }
}

export default App;
