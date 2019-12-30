import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/CommonUI/Layout';
import Header from '../components/CommonUI/Header';
import { colors } from '../lib/styles/global';
import rootReducer, { rootSaga } from '../store/modules';
import createSagaMiddleware from 'redux-saga';

// styles/global.js

interface IProps {
  store: Store;
}




// composeWithDevTools()
const sagaMiddleware = createSagaMiddleware();
const makeStore = () => {
  return createStore(rootReducer, applyMiddleware(sagaMiddleware, ) );
};
sagaMiddleware.run(rootSaga);

class MyApp extends App<IProps> {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <ThemeProvider theme={{ fontFamily: 'Noto Sans KR' }}>
        {/* <Header /> */}
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
        <>
          <GlobalStyle />
        </>
      </ThemeProvider>
    );
  }
}
export default withRedux(makeStore)(MyApp);

const GlobalStyle = createGlobalStyle`
  html {
    font-size:62.5%;
    background-color: #fff;
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
    margin: 0;
  }`;
