import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  :root {
    font-family: monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    // Variables
    --primary-color-bright: orange;
    --secondary-color-bright: turquoise;
    --primary-color-dark: blue;
    --primary-bg-color-bright: rgb(0, 176, 255);
    --secondary-bg-color-bright: turquoise;
    --primary-bg-color-dark: rgb(33,33,33);
    --secondary-bg-color-dark: rgb(44,44,44);
    --hover-bg-color-dark: rgb(22,22,22);

  }
  body{
    min-width: 100%;
    min-height: 100%;
    overflow-y: auto;
    color: var(--primary-color-bright);
    background-color: var(--primary-bg-color-dark);
  }
`;
