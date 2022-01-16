import React from "react";
//import { useMoralis } from "react-moralis";
import { BrowserRouter, Routes,Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Upload from "./components/UploadDataModal";

function App() {
  return (
  <div className="app">
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        
        <Route path="upload" element={<Upload />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
  
}

export default App;