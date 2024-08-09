import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";
import App from "./core/App";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./core/GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Normalize />
        <GlobalStyle />
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
