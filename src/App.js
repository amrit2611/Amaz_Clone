import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Returns from './components/Returns';
import Prime from './components/Prime';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/returns" element={<Returns />} />
      <Route path="/prime" element={<Prime />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  );
}


export default App;
