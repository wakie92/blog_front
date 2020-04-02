import React, { useRef, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Editor, Head, Preview } from '../../components/Write';
import { RootState } from '../../store/modules';
import { getValue, resetInputValue, addTagArr } from '../../store/modules/postUI';
import { ROUTES } from '../../lib/Routes/Routes';
import { removeExp } from '../../lib/Utils/utils';
import { AxiosError } from 'axios';
import { Post, postAsync } from '../../store/modules/post';
import { AsyncState } from '../../lib/Utils/asyncUtils';
import { addPhoto } from '../../lib/Utils/S3';
import TagAndImg from '../../components/Write/TagAndImg';
import SubTitleInput from '../../components/Write/SubTItleInput';

type WriteContainerProps = {
	getInitList: AsyncState<Post[], AxiosError>;
};

const WriteContainer = ({ getInitList }: WriteContainerProps) => {
	const dispatch = useDispatch();
	const mdRef = useRef<HTMLDivElement>();
	const { postWrite } = useSelector((state: RootState) => ({
		postWrite: state.postUI.postWrite
	}));
	const router = useRouter();

	const handleChange = useCallback(
		(e: React.ChangeEvent<any>) => {
			const { value, name } = e.target;
			dispatch(getValue({ name, value }));
		},
		[ dispatch ]
	);

	const handleTags = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode === 188 && postWrite.tag !== ',') {
      dispatch(addTagArr());
    }
  }, [dispatch, postWrite.tag]);
  
	const handleConv = useCallback(
		(html: string) => {
			dispatch(getValue({ name: 'mdValue', value: html }));
		},
		[ dispatch ]
	);

	const onUpload = useCallback(
		(postData) => {
			const uploadDate = new Date().toISOString();
			const withoutExp = removeExp(postData.inputValue);
			const dataForUpload: Post = {
				title: postData.title,
				rawContent: postWrite.inputValue,
				content: withoutExp,
				contentMd: postData.mdValue,
				date: uploadDate,
				imgUrl: postWrite.imgUrl,
				id: getInitList.data[0].id + 1,
        subTitle: postWrite.subTitle,
        tagArr: postWrite.tagArr,
			};
			console.log(dataForUpload);
			//img upload작업  eslint-plugin-react-hook
			const res = dispatch(postAsync.request(dataForUpload));
			router.push(ROUTES.home, ROUTES.home, { shallow: true });
		},
		[ dispatch, postWrite ]
	);

	const reqImgUpload = useCallback(
		async (e: React.ChangeEvent<HTMLInputElement>) => {
			const bucketData: string | void = await addPhoto(e);
			console.log(bucketData);
			if (typeof bucketData === 'string') {
				dispatch(getValue({ name: 'imgUrl', value: bucketData }));
			}
		},
		[ dispatch ]
	);

	const reqGetImgUrl = useCallback(
		async (e: React.ChangeEvent<HTMLInputElement>) => {
			const bucketData: string | void = await addPhoto(e);
			console.log(bucketData);
			if (typeof bucketData === 'string') {
				const imgMarkdown = `![](${bucketData})`;
				dispatch(getValue({ name: 'inputValue', value: imgMarkdown }));
			}
		},
		[ dispatch ]
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
		};
	}, []);
	console.log(getInitList);
	return (
		<EditBox>
			<EditPart>
				<Head onUpload={onUpload} postWrite={postWrite} onChange={handleChange} reqImgUpload={reqImgUpload} />
				<SubTitleInput subTitle={postWrite.subTitle} onChange={handleChange} />
				<TagAndImg
					reqGetImgUrl={reqGetImgUrl}
					tag={postWrite.tag}
					tagArr={postWrite.tagArr}
					onChange={handleChange}
					onAddTag={handleTags}
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
