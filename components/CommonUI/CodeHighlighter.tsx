import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOneDark from '../../lib/styles/AtomOneDark';

type CodeHighlighterProps = {
  value: string;
  language: string;
  codeEl?: HTMLElement;
}
const CodeHighlighter = ({ value, language }: CodeHighlighterProps) => {
  return (
    <SyntaxHighlighter language={language} style={atomOneDark}>
      {value === undefined ? '' : value}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;