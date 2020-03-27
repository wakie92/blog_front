import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Editor, Head, Preview } from '../../components/Write';
import { RootState } from '../../store/modules';
import { getValue, resetInputValue, setInputValues } from '../../store/modules/postUI';
import { ROUTES } from '../../lib/Routes/Routes';
import { removeExp } from '../../lib/Utils/utils';
import { AxiosError } from 'axios';
import { Post, postAsync, putPostAsync } from '../../store/modules/post';
import { AsyncState } from '../../lib/Utils/asyncUtils';
import { addPhoto } from '../../lib/Utils/S3';
import TagAndImg from '../../components/Write/TagAndImg';

type EditContainerProps = {
  postData: AsyncState<Post, AxiosError>;
  editMode: boolean;
  resId: string;
};

const EditContainer = ({ postData, editMode, resId }: EditContainerProps) => {
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

  const onUpload = useCallback((postWrite) => {
    const uploadDate = new Date().toISOString();
    const withoutExp = removeExp(postWrite.inputValue);
    const dataForUpload:Post = {
      title: postWrite.title,
      rawContent: postWrite.inputValue,
      content: withoutExp,
      contentMd: postWrite.mdValue,
      date: uploadDate,
      imgUrl: postWrite.imgUrl,
      id: postData.data.id
    }
    //img upload작업  eslint-plugin-react-hook
    console.log(dataForUpload);
    const res = dispatch(putPostAsync.request({post: dataForUpload, id: resId}));
    (res);
    router.push(ROUTES.home, ROUTES.home, { shallow: true });
  }, [dispatch, postWrite]);
  
  const reqImgUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const bucketData: string | void = await addPhoto(e);
    if (typeof bucketData === 'string') {
      dispatch(getValue({ name: 'imgUrl', value: bucketData }));
    }
  }, [dispatch]);

  const reqGetImgUrl = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const bucketData: string | void = await addPhoto(e);
    console.log(bucketData);
    if (typeof bucketData === 'string') {
      const imgMarkdown = `![](${bucketData})`;
      dispatch(getValue({ name: 'inputValue', value: imgMarkdown }));
    }
  }, [dispatch]);

  useEffect(() => {
    const { rawContent, contentMd, imgUrl, title } = postData.data
    dispatch(setInputValues({
      title,
      inputValue: rawContent,
      mdValue:contentMd,
      imgUrl 
    }));
    return () => {
      dispatch(resetInputValue());
    }
  }, []);
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

export default EditContainer;
const EditBox = styled.div`
  display: flex;
  height: 94rem;
  justify-content: space-between;
`;
