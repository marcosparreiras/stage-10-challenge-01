import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 8px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 10px;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.GRAY_900}
  }

  body, input, button, textarea  {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
  }

   button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none
  }

  button:hover {
    filter: brightness(0.9);
  }
`;

export default GlobalStyles;
