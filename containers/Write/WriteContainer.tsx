import React, { useRef, useCallback, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Editor, Preview } from '../../components/Write';
import { RootState } from '../../store/modules';
import { getValue, resetInputValue } from '../../store/modules/postUI';
import { ROUTES } from '../../lib/Routes/Routes';
import { removeExp, checkUser } from '../../lib/Utils/utils';
import { Post, postAsync } from '../../store/modules/post';
import EditorHeaderContainer from '../Common/EditorHeaderContainer';
import useInputInEditor from '../../lib/hooks/useInput';

type WriteContainerProps = {};

const WriteContainer = ({  }: WriteContainerProps) => {
	const dispatch = useDispatch();
	const [onChange, reset] = useInputInEditor();
	const mdRef = useRef<HTMLDivElement>();
	const { postWrite, postsList, reqPost } = useSelector((state: RootState) => ({
		postWrite: state.postUI.postWrite,
		postsList: state.post.postsList,
		reqPost: state.post.reqPost
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

	const onUpload = useCallback(
		() => {
			const uploadDate = new Date().toISOString();
			const { title, inputValue, mdValue, imgUrl, subTitle, tagArr } = postWrite;
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
				tagArr: tagArr
			};
			try {
				dispatch(postAsync.request(dataForUpload));
			} catch (err) {
				throw err;
			}
		},
		[ dispatch, postWrite ]
	);

	useEffect(
		() => {
			if (reqPost.data) {
				router.push(ROUTES.home, ROUTES.home, { shallow: false });
			}
		},
		[ reqPost.data ]
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
			reset();
			checkUser();
		};
	}, []);
	return (
		<EditBox>
			<EditPart>
				<EditorHeaderContainer onChange={onChange} onUpload={onUpload} />
				<Editor inputValue={postWrite.inputValue} onChange={handleChange} />
			</EditPart>
			<Preview inputValue={postWrite.inputValue} mdRef={mdRef} onChange={handleConv} />
		</EditBox>
	);
};

export default React.memo(WriteContainer);
const EditBox = styled.div`
	display: flex;
	height: 94rem;
	justify-content: space-between;
`;

const EditPart = styled.div`width: calc(50% - 1.6rem);`;
