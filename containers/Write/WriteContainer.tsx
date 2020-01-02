import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Editor, Head, Preview } from '../../components/Write';
import { RootState } from '../../store/modules';
import { inputMd, getValue } from '../../store/modules/postUI';
import { ROUTES } from '../../lib/Routes/Routes';

export default function WriteContainer() {
  const dispatch = useDispatch();
  const { mdValue, inputValue } = useSelector((state: RootState) => ({
    mdValue: state.post.mdValue,
    inputValue: state.post.inputValue,
  }))
  const router = useRouter();
  const [title, setTitle] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    dispatch(getValue(value));
  }, [dispatch]);

  const handleTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  }, [setTitle]);

  const handleConv = useCallback((html: string) => {
    dis
    setConvValue(html);
  }, [setConvValue]);

  const onUpload = useCallback(() => {
    const uploadDate = new Date().toLocaleString();
    console.log(mdValue);
    dispatch(
      inputMd({
        title,
        date: uploadDate,
        content: mdValue,
        contentMd: convValue,
      }),
    );
    router.push(ROUTES.devBlog, ROUTES.devBlog, { shallow: true });
  }, [dispatch, inputValue, convValue, title]);
  console.log(inputValue);
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
