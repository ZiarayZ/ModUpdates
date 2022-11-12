import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./routes";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter >
  );
}

export default App;
