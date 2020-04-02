import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { colors } from '../../lib/styles/global';
import { breakpoints } from '../../lib/styles/responsive';
import CodeHighlighter from './CodeHighlighter';
import '../../lib/styles/prism.css';
import '../../lib/styles/githubMarkdown.css';
type RenderMarkdownViewProps = {
  html: string;
}
const RenderMarkdownView = ({ html }: RenderMarkdownViewProps) =>{
  console.log(html);
  return (
    <div className="markdown-body">
      <ReactMarkdown 
        source={html}
        skipHtml={false}
        escapeHtml={false}
        renderers={{ 
          code: CodeHighlighter 
        }}
      />
    </div>
)}
RenderMarkdownView.defaultProps = {
  html: '',
}

export default RenderMarkdownView;