import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  
  html {
    height: 100%;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    font-size: 14px;
  }
  #root {
    min-height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace;
  }
`;

export default GlobalStyle;