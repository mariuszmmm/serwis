import { createGlobalStyle } from "styled-components";

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
    overflow-x: hidden;
    overflow-y: scroll;
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.mineShaft};
    background-size: cover;
    background-position: center ; 
    background-repeat: no-repeat; 
    background-attachment: fixed; 
    color: ${({ theme }) => theme.color.white};
  };
`;

export default GlobalStyle;
