import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  :root {
    font-family: monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body{
    min-width: 100%;
    min-height: 100%;
    overflow-y: auto;
    background-color: rgb(33,33,33);
    color: turquoise;
   
  }
`;
