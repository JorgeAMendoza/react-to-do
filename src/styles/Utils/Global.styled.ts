import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    line-height: 1.4;
  }
  body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
    background-color: #fafafa;
    position: relative;
  }
  a,
  button {
    text-decoration: none;
    cursor: pointer;
    border: none;
    font-family: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
  img {
    max-width: 100%;
    display: block;
  }
  input {
    font-family: inherit;
    border: none;
  }
  p,
  li,
  h1,
  h2,
  h3,
  h4 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
`;