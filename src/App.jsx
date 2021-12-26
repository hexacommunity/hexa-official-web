import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Home } from './views/Home';
import './App.css';

export const App = () => {
  return routing;
};

const routing = (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Router>
);
