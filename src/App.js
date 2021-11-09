import React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import RootPage from "./pages/RootPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
