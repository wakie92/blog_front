import React, { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Editor, Preview } from '../../components/Write';
import { RootState } from '../../store/modules';
import { getValue, resetInputValue, setInputValues, } from '../../store/modules/postUI';
import EditorHeaderContainer from '../Common/EditorHeaderContainer';
import { putPostAsync, Post } from '../../store/modules/post';
import { ROUTES } from '../../lib/Routes/Routes';
import { removeExp } from '../../lib/Utils/utils';

type EditContainerProps = {
  editMode: boolean;
};

const EditContainer = ({ editMode }: EditContainerProps) => {
  const dispatch = useDispatch();
  const { postWrite, post } = useSelector((state: RootState) => ({
    postWrite: state.postUI.postWrite,
    post: state.post.post,
  }))
  const router = useRouter();
  const mdRef = useRef<HTMLDivElement>();

  const handleChange = useCallback((e: React.ChangeEvent<any>) => {
    const { value, name } = e.target;
    dispatch(getValue({ name, value }));
  }, [dispatch]);

  const handleConv = useCallback((html: string) => {
    dispatch(getValue({ name: 'mdValue', value: html}));
  }, [dispatch]);

  const onUpload = useCallback(() => {
    const { title, inputValue, mdValue, imgUrl, subTitle, tagArr} = postWrite
    const { res, resId } = post.data;
    const uploadDate = new Date().toISOString();
    const withoutExp = removeExp(inputValue);
    const dataForUpload:Post = {
      title: title,
      rawContent: inputValue,
      content: withoutExp,
      contentMd: mdValue,
      date: uploadDate,
      imgUrl: imgUrl,
      id: res.id,
  		subTitle: subTitle,
      tagArr: tagArr,
    }
    dispatch(putPostAsync.request({post: dataForUpload, id: resId}));
    router.push(ROUTES.home, ROUTES.home, { shallow: true });
  }, [dispatch, postWrite]);
  

  useEffect(() => {
    mdRef.current.scrollTo(0, mdRef.current.scrollHeight);
  }, [postWrite.inputValue])

  useEffect(() => {
    const { rawContent, contentMd, imgUrl, title, subTitle, tagArr } = post.data.res
    dispatch(setInputValues({
      title,
      inputValue: rawContent,
      mdValue:contentMd,
      imgUrl, 
      subTitle,
      tagArr,
      tag: '', 
    }));
    return () => {
      dispatch(resetInputValue());
    }
  }, []);
  return (
    <>
      <EditBox>
        <EditPart>
          <EditorHeaderContainer 
            postWrite={postWrite}
            onChange={handleChange}
            onUpload={onUpload}
          />
          <Editor inputValue={postWrite.inputValue} onChange={handleChange} />
        </EditPart>
        <Preview inputValue={postWrite.inputValue} mdRef={mdRef} onChange={handleConv} />
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

const EditPart = styled.div`width: calc(50% - 1.6rem);`;