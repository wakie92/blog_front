// styles/global.js
import css from 'styled-jsx/css'

export default css.global`
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.8;
    color: #202020;
    font-family: 'Noto Sans KR', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    vertical-align: top;
  }
  article, footer, header, aside, details, header, nav, section {
    display: block;
  }
  ul, li, ol {
    list-style: none;
  }
  img {
    max-width: 100%;
  }
  a {
    text-decoration: none;
    color: #202020;
  }
  h1 {
    font-weight: 700;
  }
  p {
    margin-bottom: 10px;
  }`