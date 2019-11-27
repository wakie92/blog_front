import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
// import Header from '../components/Header';
import Layout from '../components/CommonUI/Layout';
import Header from '../components/CommonUI/Header';
// styles/global.js

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={{ fontFamily: 'Noto Sans KR' }}>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <>
          <GlobalStyle />
        </>
      </ThemeProvider>
    );
  }
}
export default MyApp;


const GlobalStyle = createGlobalStyle`
  html {
    font-size:62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.8;
    color: #343a40;
    font-family: 'Noto Sans KR';
    box-sizing: border-box;
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
    color: #343a40;
  }
  h1 {
    font-weight: 700;
  }
  p {
    margin-bottom: 10px;
  }`;
