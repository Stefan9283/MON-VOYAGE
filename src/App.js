import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import WithNAV from "./WithNAV.js";
import WithoutNAV from "./WithoutNAV.js";
import Contact from "./pages/Contact";
import WithNAVLogged from "./WithNAVLogged";
import Location from "./pages/Location";
import Review from "./pages/Reviews";
import LeaveReview from "./pages/LeaveReview";

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithNAV />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/reviews" element={<Review />} />
        </Route>
        <Route element={<WithNAVLogged />}>
        <Route path="/leavereview" element={<LeaveReview />} />
        </Route>
        <Route element={<WithoutNAV />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
