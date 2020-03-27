import { useEffect } from 'react';
import styled from 'styled-components';
import showdown from 'showdown';
import '../../lib/styles/github-markdown.css';

interface PreviewProps {
  inputValue: string;
  onChange: (html: string) => void;
}
export default function Preview({ inputValue, onChange }: PreviewProps) {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(inputValue);
  useEffect(() => {
    onChange(html);
  }, [html])
  return <Wrapper>
    <div className='markdown-body' dangerouslySetInnerHTML={{ __html: html }}>

    </div>
  </Wrapper>;
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
