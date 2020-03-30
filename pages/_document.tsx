import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet:ServerStyleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
        {/* <link rel="alternate stylesheet" title="An Old Hope" href="styles/an-old-hope.css" /> */}
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css" /> */}
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/vs2015.min.css" />
       
        <script>hljs.initHighlightingOnLoad();</script> 
        <meta name="description" content="리액트를 주로 개발하는 주니어 프론트엔드 개발자입니다. 항해사가 항해일지를 기록하듯 개발과 지식의 로그를 기록하기 위한 블로그입니다." />
        <meta name="keyword" content="frot-end" />
        <meta name="keyword" content="리액트" />
        <meta name="keyword" content="react" />
        <meta name="keyword" content="javascript" />
        <title>Oscar's devlog</title>
        </Head>
        <body>
          <Main />
          <div id="modal" />
            <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
