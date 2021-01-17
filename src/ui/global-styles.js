import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    color: #0B0B0B;
    font-family: "Roboto Mono", monospace;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  audio {
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0
  }
`;
