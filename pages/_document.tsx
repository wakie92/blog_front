import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { readFileSync } from 'fs';
import { join } from 'path';


class NextHeadWithInlineCss extends Head {

  getInlineCss() {
      const {files} = this.context._documentProps;
      console.log('files', files); 
      if (!files || files.length === 0) return null;

      const filtered = files.filter(file => /\.css$/.test(file)).map(file => (
        <style key={file}
          dangerouslySetInnerHTML={{
            __html: readFileSync(join(process.cwd(), '.next', file), 'utf-8'),
          }}
        />
      ));
      return filtered;
  }

  render() {
    const { head } = this.context._documentProps;
    return (
      <head {...this.props}>
        <meta name="description" content="리액트를 주로 개발하는 주니어 프론트엔드 개발자입니다. 항해사가 항해일지를 기록하듯 개발과 지식의 로그를 기록하기 위한 블로그입니다." />
        <meta name="keyword" content="frot-end" />
        <meta name="keyword" content="리액트" />
        <meta name="keyword" content="react" />
        <meta name="keyword" content="javascript" />
        {head}
        {this.getInlineCss()}
        {this.props.children}
      </head>
    )
  }
}
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
          <title>Oscar's devlog</title>
        </Head>
        <NextHeadWithInlineCss />
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
