// src/styles/globalStyles.js
import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    background: "#121212", // Fundo escuro
    text: "#E0E0E0", // Texto claro
    primary: "#3498db", // Cor de destaque (azul)
    secondary: "#2ecc71", // Cor alternativa (verde)
    cardBackground: "#1E1E1E", // Fundo dos cartões
    border: "#4f4f4f", // Bordas
  },
  fonts: {
    main: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }
`;
