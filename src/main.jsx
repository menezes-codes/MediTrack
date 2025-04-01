import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/reset.css";
import { ThemeProvider } from "styled-components"; // Importando o ThemeProvider
import { GlobalStyle, theme } from "./styles/globalStyles.js"; // Importando o tema

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
