import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";
import App from "./core/App";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./core/GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga";

// Inicjalizacja Google Analytics
const TRACKING_ID = "G-G3GD9N9DTF"; // Zamień na swój ID śledzenia
ReactGA.initialize(TRACKING_ID);

// Funkcja do raportowania strony
const reportPageView = (location) => {
  ReactGA.set({ page: location.pathname }); // Ustawienie strony
  ReactGA.pageview(location.pathname); // Śledzenie wyświetleń strony
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Raportowanie wyświetlenia strony na starcie
reportPageView(window.location);

reportWebVitals();
