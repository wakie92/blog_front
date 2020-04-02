import { useEffect, createRef } from 'react';
import styled from 'styled-components';
import showdown from 'showdown';
// import '../../lib/styles/github-markdown.css';
import { breakpoints } from '../../lib/styles/responsive';
import Prism from "prismjs";
import { colors } from '../../lib/styles/global';
import RenderMarkdownView from '../CommonUI/RenderMarkdownView';
// import 'prismjs/themes/prism-okaidia.css';

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
    Prism.highlightAll();
  }, [html]);

 
  return (
    <>
      <Wrapper ref={mdRef}>
      <RenderMarkdownView html={html} /> 
        {/* <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }}>

        </div> */}
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
