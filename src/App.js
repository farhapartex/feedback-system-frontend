import React from "react";
import {Routes, Route} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import Login from "./pages/Login";
import RootPage from "./pages/RootPage";
import { login } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  if(!user || (user && !user.isLoggedIn && !user.user)){
    user = localStorage.getItem("user");
    if(user){
      dispatch(login(JSON.parse(user)));
    }
    
  }

  if(user && user.isLoggedIn && user.user){
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
