import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import reportWebVitals from './app/reportWebVitals';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home, { Payday2, PerkDecks } from "./routes";
import { sitemap } from './sitemaps/sitemap';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={sitemap.path} element={<Home />} />
        <Route path={sitemap.Payday2.path} element={<Payday2 />} />
        <Route path={sitemap.Payday2.PerkDecks.path} element={<PerkDecks />} />
      </Routes>
    </HashRouter >
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
