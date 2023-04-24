
import React from "react";
import {  Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/Navbar";
import './App.css';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
      
    </>
  );
}

export default App;