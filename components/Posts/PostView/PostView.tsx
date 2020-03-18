import styled from 'styled-components';
import { colors } from '../../../lib/styles/global';
import { breakpoints } from '../../../lib/styles/responsive';
import { Post } from '../../../store/modules/post';
import { AsyncState } from '../../../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { formatDate } from '../../../lib/Utils/utils';
import '../../../lib/styles/github-markdown.css';
import Maybe from '../../Maybe/Maybe';
import Button from '../../CommonUI/Button';
import { Dispatch, SetStateAction } from 'react';

type PostViewProps = {
  postData: AsyncState<Post, AxiosError>;
  editMode: boolean;
	setEditMode: Dispatch<SetStateAction<boolean>>;
	reqDeletePost: (id: number) =>  void;
};

export default function PostView({ postData, setEditMode, editMode, reqDeletePost }: PostViewProps) {
	const { data, loading, error } = postData;
	console.log(postData);
	if (loading) return null;
	return (
		<Layout>
			<div className="wrapper">
				<div className="reg-div">
					<span className="reg-date">{formatDate(data.date)}</span>
					<div className="">
						<Button 
							type="button" 
							size="medium" 
							bgColor={colors.gray1} 
							onClick={() => setEditMode(!editMode)}
						>
							수정
						</Button>
						<Button 
							type="button" 
							size="medium" 
							bgColor={colors.gray1} 
							onClick={() => reqDeletePost(postData.data.id)}
						>
							삭제
						</Button>
					</div>
				</div>

				<h1>{data.title}</h1>
				<hr />
				<main>
					<Maybe isVisible={data.imgUrl}>
						<img className="main-img" src={data.imgUrl} alt="대표이미지" />
					</Maybe>
					<div className="markdown-body" dangerouslySetInnerHTML={{ __html: data.contentMd }} />
				</main>
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
	hr {
		width: 100%;
		border: 1px solid ${colors.gray5};
		margin: 2rem 0;
	}
	.reg-div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		button {
			font-family: inherit;
		}
	}
	.reg-date {
		color: ${colors.gray5};
	}
	.wrapper {
		width: 100%;
		main {
			width: 90%;
			margin: auto;
			display: flex;
			flex-direction: column;
			.main-img {
				margin: auto;
				padding-bottom: 4rem;
				max-height: 50rem;
				max-width: 100%;
			}
		}
	}
	@media screen and (max-width: ${breakpoints.large}) {
		width: calc(100% - 4rem);
	}
	@media screen and (max-width: ${breakpoints.medium}) {
	}
`;
