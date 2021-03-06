import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import { Login } from "./pages/login/Login";
import Signup from "./pages/login/Signup";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
