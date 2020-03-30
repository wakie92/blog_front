import App, { AppProps, AppContext } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/CommonUI/Layout';
import Header from '../components/CommonUI/Header';
import rootReducer, { rootSaga } from '../store/modules';

// styles/global.js

interface IProps {
  store: Store;
}

// composeWithDevTools()
const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [composeWithDevTools(), sagaMiddleware]
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware) );
  sagaMiddleware.run(rootSaga);
  return store;
};

class MyApp extends App<IProps> {
  state = {
    token: null
  }
  componentDidMount() {
    const token = JSON.parse(sessionStorage.getItem("idToken"));
    this.setState({token});
  }
  static async getInitialProps({ Component, ctx}: AppContext) {
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
          <Layout token={this.state.token}>
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
  button {
    cursor: pointer;
  }
  p {
    margin: 0;
  }`;
