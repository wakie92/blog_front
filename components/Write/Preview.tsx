import React, { useEffect, createRef } from 'react';
import styled from 'styled-components';
import showdown from 'showdown';
import '../../lib/styles/githubMarkdown.css';
import RenderMarkdownView from '../CommonUI/RenderMarkdownView';

interface PreviewProps {
  inputValue: string;
  onChange: (html: string) => void;
  mdRef: React.RefObject<HTMLDivElement>;
}
const Preview = ({ inputValue, mdRef, onChange }: PreviewProps) => {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(inputValue);
  useEffect(() => {
    onChange(html);
  }, [html]);
 
  return (
    <>
      <Wrapper ref={mdRef}>
      <RenderMarkdownView html={inputValue} /> 
      </Wrapper>
  </>);
}
export default React.memo(Preview)

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
