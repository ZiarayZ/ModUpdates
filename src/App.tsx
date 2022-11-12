import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./routes";
import { sitemap } from './sitemaps/sitemap';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={sitemap.path} element={<Home />} />
      </Routes>
    </HashRouter >
  );
}

export default App;
