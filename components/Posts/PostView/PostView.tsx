import styled from 'styled-components';
import { colors } from '../../../lib/styles/global';
import { breakpoints } from '../../../lib/styles/responsive';
import { Post } from '../../../store/modules/post';
import { AsyncState } from '../../../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { formatDate } from '../../../lib/Utils/utils';
// import '../../../lib/styles/github-markdown.css';
import './prism.css';
import Maybe from '../../Maybe/Maybe';
import Button from '../../CommonUI/Button';
import { Dispatch, SetStateAction } from 'react';

type PostViewProps = {
  postData: AsyncState<Post, AxiosError>;
	editMode: boolean;
	isLogged: boolean;
	setEditMode: Dispatch<SetStateAction<boolean>>;
	reqDeletePost: (id: number) =>  void;
};

export default function PostView({ postData, isLogged, setEditMode, editMode, reqDeletePost }: PostViewProps) {
	const { data, loading, error } = postData;
	console.log(postData);
	if (loading) return null;
	return (
		<Layout>
			<div className="wrapper">
				<div className="reg-div">
					<span className="reg-date">{formatDate(data.date)}</span>
					<Maybe isVisible={isLogged}>
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
					</Maybe>
				</div>

				<h1>{data.title}</h1>
				<hr />
				<main>
					<Maybe isVisible={data.imgUrl}>
						<img className="main-img" src={data.imgUrl} alt="대표이미지" />
					</Maybe>
					<RenderMarkdown  dangerouslySetInnerHTML={{ __html: data.contentMd }} />
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

const RenderMarkdown = styled.div`
line-height: 2.4rem;
p, ol, ul, dl {
	margin-bottom: 1.6rem;
}
li {
	display: list-item;
	text-align: -webkit-match-parent;
	list-style-position: inside;
	list-style-type: disc;
}
pre {
	border: none;
	margin-bottom: 1.6rem;
	code {
		font-size: 1.3rem;
		border-radius: .8rem;
		padding: 1.6rem;
	}
}
iframe, img, embed, object, video {
	max-width: 90%;
	display: block;
	margin: 0 auto;
	margin-top: 4.8rem;
	margin-bottom: 4.8rem;
	pointer-events: none;
}
blockquote {
	color: ${colors.gray2};
	margin-top: 3.2rem;
	margin-bottom: 3.2rem;
	padding: 1.6rem 1.5rem 1.6rem 1.5rem;
	border-left: 0.8rem ${colors.gray5} solid;
	@media screen and (max-width: ${breakpoints.small}) {
		font-size: 1.6rem;
	}
	:first-child {
		margin: 0;
	}
	:last-child {
		margin: 0;
	}
}
table {
	border-collapse: collapse;
	border-spacing: 0;
	margin: 1.6rem 0;
}
td,
th {
	padding: 0
}
p,
ol,
ul,
dl {
	line-height: 2.8rem;
	margin-bottom: 1.6rem;
}
p + p {
	margin-top: 2.4rem;
}
li p {
	display: inline;
	line-height: 2.8rem;
	font-weight: 400;
}
ul > li,
li > ul,
li > ol {
	margin-bottom: 0;
	margin-left: 1.6rem
}
ul {
	list-style-position: inside;
	list-style-type: disc;
}
ol {
	display: block;
	list-style-type: decimal;
	margin-block-start: 1.6rem;
	margin-block-end: 1.6rem;
	margin-inline-start: 0;
	margin-inline-end: 0;
	padding-inline-start: 4rem;
}
p, li {
	@media screen and (max-width: ${breakpoints.small}) {
		font-size: 1.6rem;
	}
}
hr {
	border: 0;
	border-top: .1rem solid rgba(0, 0, 0, 0.1);
	border-bottom: .1rem solid ${colors.whiteColor};
	margin: 1.6rem 0
}
a {
	color: ${colors.gray0};
	text-decoration: none
}
strong {
	color:  ${colors.defaultBlack};
}
h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: 2.43rem;
	color: ${colors.defaultBlack};
	font-weight: 700;
	margin-top: 3.6rem;
	margin-bottom: 1.6rem;
	& code {
		font-weight: 600;
	}
}
h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
	color:  ${colors.gray0};
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
	code {
		font-size: 1.3rem;
		padding: .326rem .39rem;
		border-radius: .3rem;
		background-color: rgba(27, 31, 35, .05);
		border: .1rem solid ${colors.markdownCodeColor};
		color: ${colors.markdownCodeColor};
		margin: 0 .39rem;
	}
}
h2{
	margin-top: 7rem;
	margin-bottom: 3rem;
	font-size: 3.4rem;
	line-height: 4.4rem;
}
h3{
	font-size: 2.1rem;
	margin-top: 4.6rem;
	margin-bottom: 2rem;
}
tr {
	border-top: .1rem solid ${colors.whiteL1};
	background: ${colors.whiteColor};
}
th,
td {
	padding: .6rem 1.3rem;
	border: .1rem solid ${colors.whiteL2};
}
table tr:nth-child(2n) {
	background: ${colors.whiteL3};;
}

`