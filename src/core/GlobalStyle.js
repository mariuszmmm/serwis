import { createGlobalStyle } from "styled-components";
import backgrund from "../assets/images/background.png";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  };

  *, ::after, ::before {
    box-sizing: inherit;
  };

  body {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-y: scroll;
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.background};
    background-image: url("${backgrund}");
    background-size: cover;
    color: ${({ theme }) => theme.color.white};
  };
`;

export default GlobalStyle;
