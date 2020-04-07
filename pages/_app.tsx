import {  AppContext, AppInitialProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import Layout from '../components/CommonUI/Layout';
import configureStore from '../store/configureStore';
import { useState, useEffect } from 'react';
import { checkUser } from '../lib/Utils/utils';

type IProps = { store: Store } & AppInitialProps & AppContext

// composeWithDevTools()
// const configureStore = () => {
//   const sagaMiddleware = createSagaMiddleware();
//   const middleware = [composeWithDevTools(), sagaMiddleware]
//   const store = createStore(rootReducer,  applyMiddleware(sagaMiddleware) );
//   // if (req || !isServer) {
//     sagaMiddleware.run(rootSaga)
//   // }
//   return store;
// };
const MyApp2 = (props: IProps) => {
  const { Component, pageProps, store } = props;
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenData = JSON.parse(sessionStorage.getItem("idToken"));
    setToken(tokenData);
  }, []);
  
  return (
    <ThemeProvider theme={{ fontFamily: 'Noto Sans KR' }}>
      <Provider store={store}>
        <Layout token={token}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
MyApp2.getInitialProps = async ({ Component, ctx, sessionStorage }) => {
  let pageProps = {}
  // 서버사이드에서 리덕스 연결 성공. 원인 공부
  if (ctx.isServer) {
    pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
}

export default withRedux(configureStore)(withReduxSaga(MyApp2));

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
