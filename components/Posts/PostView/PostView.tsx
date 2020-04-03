import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { AxiosError } from 'axios';

import { breakpoints } from '../../../lib/styles/responsive';
import { Post } from '../../../store/modules/post';
import { AsyncState } from '../../../lib/Utils/asyncUtils';
import { PostHeader, PostContent } from '.';

type PostViewProps = {
  postData: AsyncState<{
    res: Post;
    resId: string;
}, AxiosError<any>>;
	editMode: boolean;
	isLogged: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>; 
	reqDeletePost: () =>  void;
};

export default function PostView({ 
	postData, 
	isLogged, 
	setEditMode, 
	editMode, 
	reqDeletePost 
}: PostViewProps) {
	const { loading } = postData;
	const { date, title, imgUrl, rawContent, id } = postData.data.res;
	if (loading) return null;
	return (
		<Layout>
			<div className="wrapper">
				<PostHeader
					date={date} 
					isLogged={isLogged}
					id={id}
					setEditMode={setEditMode}
					reqDeletePost={reqDeletePost}
				/>
				<PostContent
					title={title}
					imgUrl={imgUrl}
					rawContent={rawContent}
				/>
			</div>
		</Layout>
	);
}

const Layout = styled.div`
	width: calc(100% - 18rem);
	margin: auto;
	min-height: 70rem;
	padding: 2rem;
	margin-top: 20rem;
	@media screen and (max-width: ${breakpoints.large}) {
		width: calc(100% - 4rem);
	}
`;