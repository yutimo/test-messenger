import {createGlobalStyle} from 'styled-components';

export const CssCommon = createGlobalStyle`
  @font-face {
    font-family: 'Graphik';
    src: url(${require('../../fonts/Graphik-Regular-Web.woff2')}) format('woff2'),
         url(${require('../../fonts/Graphik-Regular-Web.woff')}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Graphik';
    src: url(${require('../../fonts/Graphik-Medium-Web.woff2')}) format('woff2'),
         url(${require('../../fonts/Graphik-Medium-Web.woff')}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Graphik', sans-serif;
  }
  button {
    border: none;
    outline:none;
    background: none;
  }
`;
