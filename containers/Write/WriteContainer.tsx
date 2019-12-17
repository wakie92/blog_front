import React, { useState, useCallback ,useEffect } from 'react';
import { useRouter } from 'next/router'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Editor, Head, Preview } from '../../components/Write';
import { RootState } from '../../store/modules';
import { inputMd, getValue } from '../../store/modules/post';
import { ROUTES } from '../../lib/Routes/Routes';
import { getInputV } from '../../store/modules/write';

export default function WriteContainer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [convValue, setConvValue] = useState('');

  const { postsList } = useSelector(({ post }: RootState) => ({
    postsList: post.postsList,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    dispatch(getValue(value));
    setInputValue(value);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    setTitle(value);
  };

  const handleConv = (html) => {
    setConvValue(html)
  };

  const onUpload = () => {
    const uploadDate = new Date().toLocaleString();
    dispatch(inputMd({
      title,
      date: uploadDate,
      content: inputValue,
      contentMd: convValue,
    }));
  };
  console.log(convValue);
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
