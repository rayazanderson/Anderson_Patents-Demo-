import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;
  @import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700&family=Raleway&display=swap');
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  h6 {
    font-family: "Abhaya Libre", serif;
    color: #fdcb6e;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    z-index: 5;
  }

  h5 {
    font-family: "Abhaya Libre", serif;
    color: #dfe6e9;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
  }
  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content-wrap {
    flex: 1;
  }

  body {
    box-sizing: border-box;
    font-family: "Abhaya Libre", serif;
    background: black;
    overflow: "auto",
          height: "inherit",
          display: "block",
  }
`;

export default GlobalStyles;
