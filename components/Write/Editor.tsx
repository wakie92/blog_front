import styled from 'styled-components';
import { string } from 'prop-types';

interface EditorProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export default function Editor({ inputValue, handleChange }: EditorProps) {
  return (
    <Wrapper>
      <textarea className="editor" onChange={handleChange} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(49% - 0.8rem);

  .editor {
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    padding: 0.8rem;
  }
`;
