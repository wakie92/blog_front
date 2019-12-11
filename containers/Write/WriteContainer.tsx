import React, { useState } from 'react';
import { useRouter } from 'next/router'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Editor, Head, Preview } from '../../components/Write';
import { RootState } from '../../store/modules';
import { inputMd } from '../../store/modules/post';
import { ROUTES } from '../../lib/Routes/Routes';

export default function WriteContainer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [convValue, setConvValue] = useState();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  }

  const handleConv = (html) => {
    setConvValue(html)
  }

  const onUpload = () => {
    const uploadDate = new Date().getFullYear();
    dispatch(inputMd({
      title,
      date: uploadDate,
      content: convValue
    }));
    router.push(ROUTES.devBlog);
  };
  return (
    <>
      <Head onUpload={onUpload} title={title} onChange={handleTitle} />
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
