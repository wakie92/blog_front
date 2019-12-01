import styled from 'styled-components';
import showdown from 'showdown';

interface PreviewProps {
  inputValue: string;
}
export default function Preview({ inputValue }: PreviewProps) {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(inputValue);
  return <Wrapper dangerouslySetInnerHTML={{ __html: html }}></Wrapper>;
}

const Wrapper = styled.div`
  padding: 0.8rem;
  width: calc(49% - 0.8rem);
  background-color: white;
  overflow-y: scroll;
  word-break: break-all;
  white-space: normal;
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

  pre code {
    background-color: transparent;
    border: 0;
    padding: 0;
  }
`;
