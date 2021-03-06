import { createGlobalStyle } from 'styled-components';
import { device } from './device';

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
    position: relative;
    background: url(${({ theme }) =>
      theme.backgroundImageMobile}) no-repeat, ${({ theme }) =>
  theme.backgroundColor};
    background-size: 100%;
    color:${({ theme }) => theme.color.primary};

    @media screen and ${device.tablet}{
      background: url(${({ theme }) =>
        theme.backgroundImageDesktop}) no-repeat, ${({ theme }) =>
  theme.backgroundColor};
    background-size: 100%;
    }
  }

  .drag-instructions{
    text-align: center;
    margin-top: 8vw;
    display:none;
    @media (hover: hover) and (pointer: fine) {
      display:block;
    }
  }

  a,
  button {
    text-decoration: none;
    cursor: pointer;
    border: none;
    font-family: inherit;
    background: transparent;
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

  ul{
    list-style: none;
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
