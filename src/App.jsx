import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { SocialAccountsBar } from "./components/common/SocialAccountsBar";
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import "./App.css";

export const App = () => ROUTER;

const ROUTER = (
  <Router>
    <Navbar />
    <SocialAccountsBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/kurucular" element={<Team />} />
    </Routes>
  </Router>
);
