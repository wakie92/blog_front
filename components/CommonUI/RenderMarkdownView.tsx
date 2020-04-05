import ReactMarkdown from 'react-markdown';
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