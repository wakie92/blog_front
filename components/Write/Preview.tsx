import { useEffect } from 'react';
import styled from 'styled-components';
import showdown from 'showdown';

interface PreviewProps {
  inputValue: string;
  handleConv: (html: string) => void;
}
export default function Preview({ inputValue, handleConv }: PreviewProps) {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(inputValue);
  useEffect(() => {
    handleConv(html);
  }, [html])
  return <Wrapper>
    <div dangerouslySetInnerHTML={{ __html: html }}>

    </div>
  </Wrapper>;
}

const Wrapper = styled.div`
  padding: 0.8rem;
  width: calc(50% - 1.6rem);
  background-color: white;
  overflow-y: scroll;
  word-break: break-all;
  white-space: normal;
  margin-left: 1px;
  line-height: 1.4;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }

  h3 {
    border-bottom: 1px solid #ddd;
  }
  pre {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
    background-color: #f8f8f8;
    border: 1px solid #dfdfdf;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    padding: 0.125rem 0.3125rem 0.0625rem;
  }
  code {
    background-color: #f8f8f8;
    border-color: #dfdfdf;
    border-style: solid;
    border-width: 1px;
    color: #333;
    font-family: Consolas,"Liberation Mono",Courier,monospace;
    font-weight: normal;
    padding: 0.125rem 0.3125rem 0.0625rem;
  }
  ul {
    margin-left: 2.1rem;
  }
  ul, li {
    list-style: unset;
  }
  pre code {
    background-color: transparent;
    border: 0;
    padding: 0;
  }
`;
