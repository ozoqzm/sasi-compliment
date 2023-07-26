import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./pages/Splash";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Point from "./pages/Point";
import Pointshop from "./pages/Pointshop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pointshop />} />
      </Routes>
    </Router>
  );
}

export default App;
