import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Editor, Head, Preview } from '../../components/Write';
import { RootState } from '../../store/modules';
import { getValue, resetInputValue } from '../../store/modules/postUI';
import { ROUTES } from '../../lib/Routes/Routes';
import { removeExp } from '../../lib/Utils/utils';
import { AxiosError } from 'axios';
import { Post, postAsync } from '../../store/modules/post';
import { AsyncState } from '../../lib/Utils/asyncUtils';
import { addPhoto } from '../../lib/Utils/S3';
import TagAndImg from '../../components/Write/TagAndImg';

type WriteContainerProps = {
  getInitList: AsyncState<Post[], AxiosError>;
};

const WriteContainer = ({ getInitList }: WriteContainerProps) => {
  const dispatch = useDispatch();
  const { postWrite } = useSelector((state: RootState) => ({
    postWrite: state.postUI.postWrite,
  }))
  const router = useRouter();

  const handleChange = useCallback((e: React.ChangeEvent<any>) => {
    const { value, name } = e.target;
    dispatch(getValue({ name, value }));
  }, [dispatch]);

  const handleConv = useCallback((html: string) => {
    dispatch(getValue({ name: 'mdValue', value: html}));
  }, [dispatch]);

  const onUpload = useCallback((postData) => {
    const uploadDate = new Date().toISOString();
    const withoutExp = removeExp(postData.inputValue);
    const dataForUpload:Post = {
      title: postData.title,
      rawContent: postWrite.inputValue,
      content: withoutExp,
      contentMd: postData.mdValue,
      date: uploadDate,
      imgUrl: postWrite.imgUrl,
      id: getInitList.data[0].id + 1
    }
    console.log(dataForUpload);
    //img upload작업  eslint-plugin-react-hook
    const res = dispatch(postAsync.request(dataForUpload));
    (res);
    router.push(ROUTES.home, ROUTES.home, { shallow: true });
  }, [dispatch, postWrite]);
  
  const reqImgUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const bucketData: string | void = await addPhoto(e);
    console.log(bucketData);
    if (typeof bucketData === 'string') {
      dispatch(getValue({ name: 'imgUrl', value: bucketData }));
    }
  }, [dispatch])

  const reqGetImgUrl = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const bucketData: string | void = await addPhoto(e);
    console.log(bucketData);
    if (typeof bucketData === 'string') {
      const imgMarkdown = `![](${bucketData})`;
      dispatch(getValue({ name: 'inputValue', value: imgMarkdown }));
    }
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetInputValue());
    }
  }, []);
  console.log(postWrite.inputValue);
  return (
    <>
      <Head onUpload={onUpload} postWrite={postWrite} onChange={handleChange} reqImgUpload={reqImgUpload} />
      <TagAndImg reqGetImgUrl={reqGetImgUrl} />
      <EditBox>
        <Editor inputValue={postWrite.inputValue} onChange={handleChange} />
        <Preview inputValue={postWrite.inputValue} onChange={handleConv} />
      </EditBox>
    </>
  ); 
}

export default WriteContainer;
const EditBox = styled.div`
  display: flex;
  height: 94rem;
  justify-content: space-between;
`;
