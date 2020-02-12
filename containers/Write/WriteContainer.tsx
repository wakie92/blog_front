import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Editor, Head, Preview } from '../../components/Write';
import { RootState } from '../../store/modules';
import { getValue } from '../../store/modules/postUI';
import { ROUTES } from '../../lib/Routes/Routes';

export default function WriteContainer() {

  const dispatch = useDispatch();
  const { postWrite } = useSelector((state: RootState) => ({
    postWrite: state.postUI.postWrite,
    // postList: state.post.postsList,
  }))
  const { title, inputValue, mdValue } = postWrite;
  const router = useRouter();

  const handleChange = useCallback((e: React.ChangeEvent<any>) => {
    const { value, name } = e.target;
    dispatch(getValue({ name, value }));
  }, [dispatch]);

  const handleConv = useCallback((html: string) => {
    dispatch(getValue({ name: 'mdValue', value: html}));
  }, [dispatch]);

  const onUpload = useCallback(() => {
    const uploadDate = new Date().toLocaleString();
    // 
    router.push(ROUTES.devBlog, ROUTES.devBlog, { shallow: true });
  }, [dispatch, postWrite]);
  console.log(postWrite);
  return (
    <>
      <Head onUpload={onUpload} title={title} onChange={handleChange} />
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
