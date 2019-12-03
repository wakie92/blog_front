import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor, Head, Preview } from '../../components/Write';
export default function WriteContainer() {
  const [inputValue, setInputValue] = useState('');
  const [convValue, setConvValue] = useState();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };
  const handleConv = (html) => {
    setConvValue(html)
  }
  console.log(convValue);

  return (
    <>
      <Head />
      <div dangerouslySetInnerHTML={{ __html: convValue}}></div>
      <EditBox>
        <Editor inputValue={inputValue} handleChange={handleChange} />
        <Preview inputValue={inputValue} handleConv={handleConv} />
      </EditBox>
    </>
  );
}

const EditBox = styled.div`
  display: flex;
  height: 94rem;
  justify-content: space-between;
`;
