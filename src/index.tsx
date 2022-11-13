//React
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './app/reportWebVitals';

//Routes
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home, { Payday2, PerkDecks } from './routes';
import { sitemap } from './sitemaps/sitemap';

//Themes
import GlobalStyle from './style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { light_theme, dark_theme } from './style/theme/theme';

//Components
import Page from './components/Page';

function getTheme() {
  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDarkTheme) {
    return dark_theme;
  }
  return light_theme;
}

export function App() {

  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      setTheme(getTheme());
    });
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Page>
          <Routes>
            <Route path={sitemap.path} element={<Navigate to={sitemap.Home.path} replace />} />
            <Route path={sitemap.Payday2.path} element={<Navigate to={sitemap.Payday2.Mods.path} replace />} />

            <Route path={sitemap.Home.path} element={<Home />} />
            <Route path={sitemap.Payday2.Mods.path} element={<Payday2 />} />
            <Route path={sitemap.Payday2.PerkDecks.path} element={<PerkDecks />} />
          </Routes>
        </Page>
      </HashRouter >
    </ThemeProvider>
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
