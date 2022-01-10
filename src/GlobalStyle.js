import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    max-width: 1280px;

  }

  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;
