import React, { useRef, useCallback, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Editor, Head, Preview } from '../../components/Write';
import { RootState } from '../../store/modules';
import { getValue, resetInputValue, addTagArr } from '../../store/modules/postUI';
import { ROUTES } from '../../lib/Routes/Routes';
import { removeExp, checkUser } from '../../lib/Utils/utils';
import { AxiosError } from 'axios';
import { Post, postAsync } from '../../store/modules/post';
import { AsyncState } from '../../lib/Utils/asyncUtils';
import TagAndImg from '../../components/Write/TagAndImg';
import SubTitleInput from '../../components/Write/SubTItleInput';
import EditorHeaderContainer from '../Common/EditorHeaderContainer';

type WriteContainerProps = {};

const WriteContainer = ({}: WriteContainerProps) => {
	const dispatch = useDispatch();
	const mdRef = useRef<HTMLDivElement>();
	const { postWrite, postsList } = useSelector((state: RootState) => ({
		postWrite: state.postUI.postWrite,
    postsList: state.post.postsList,
	}));
	const router = useRouter();

	const handleChange = useCallback(
		(e: React.ChangeEvent<any>) => {
			const { value, name } = e.target;
			dispatch(getValue({ name, value }));
		},
		[ dispatch ]
	);

	const handleConv = useCallback(
		(html: string) => {
			dispatch(getValue({ name: 'mdValue', value: html }));
		},
		[ dispatch ]
	);

	const onUpload = useCallback(async () => {
		const uploadDate = new Date().toISOString();
		const { title, inputValue, mdValue, imgUrl, subTitle, tagArr} = postWrite
		const withoutExp = removeExp(inputValue);
		const dataForUpload: Post = {
			title: title,
			rawContent: inputValue,
			content: withoutExp,
			contentMd: mdValue,
			date: uploadDate,
			imgUrl: imgUrl,
			id: postsList.data[0].id + 1,
       subTitle: subTitle,
       tagArr: tagArr,
		};
		try {
			dispatch(postAsync.request(dataForUpload));
			Router.push(ROUTES.home, ROUTES.home, { shallow: true });
		} catch (err) {
			throw err;
		}
	},[ dispatch, postWrite ]
	);


	useEffect(
		() => {
			mdRef.current.scrollTo(0, mdRef.current.scrollHeight);
		},
		[ postWrite.inputValue ]
	);

	useEffect(() => {
		return () => {
			dispatch(resetInputValue());
			checkUser();
		};
	}, []);
	return (
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
	);
};

export default WriteContainer;
const EditBox = styled.div`
	display: flex;
	height: 94rem;
	justify-content: space-between;
`;

const EditPart = styled.div`width: calc(50% - 1.6rem);`;
