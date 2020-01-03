import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { colors } from '../../lib/styles/global';

interface EditorProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export default React.memo(function Editor({ inputValue, handleChange }: EditorProps) {
  return <TextArea onChange={handleChange} value={inputValue} name="inputValue" />;
})

const TextArea = styled.textarea`
  width: calc(50% - 1.6rem);
  height: calc(100% - 1.6rem);
  font-size: 1.6rem;
  padding: 0.8rem;
  margin-right: 1px;
  background-color: ${colors.gray9};
  color: #fff;
`;
