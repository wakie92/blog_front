import { useEffect, createRef } from 'react';
import styled from 'styled-components';
import showdown from 'showdown';
import '../../lib/styles/github-markdown.css';

interface PreviewProps {
  inputValue: string;
  onChange: (html: string) => void;
  mdRef: React.RefObject<HTMLDivElement>;
}
export default function Preview({ inputValue, mdRef, onChange }: PreviewProps) {
  const converter = new showdown.Converter();
  console.log(inputValue);
  const html = converter.makeHtml(inputValue);
  useEffect(() => {
    onChange(html);
  }, [html]);

 
  return (
    <>
      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/vs2015.min.css" />
      <script>hljs.initHighlightingOnLoad();</script>  
      <Wrapper ref={mdRef}>
        <div className='markdown-body' dangerouslySetInnerHTML={{ __html: html }}>

        </div>
      </Wrapper>
  </>);
}

const Wrapper = styled.div`
  padding: 3rem 1rem;
  width: calc(50% - 2rem);
  background-color: white;
  overflow-y: scroll;
  word-break: break-all;
  white-space: normal;
  margin-left: 1px;
  line-height: 1.4;
`;
