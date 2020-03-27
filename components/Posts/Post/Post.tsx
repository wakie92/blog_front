/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import showdown from 'showdown';
import { colors } from '../../../lib/styles/global';
import { formatDate } from '../../../lib/Utils/utils';

export type PostProps = {
	title: string;
	preContent: string;
	date: string;
	onClick?: () => void;
	imgUrl?: string;
	id: number;
};
const COMMENT_SVG = '/svg/iconmonstr-speech-bubble-comment-thin.svg';
export default function Post({ title, preContent, date, onClick, imgUrl, id }: PostProps) {
	const pre = `${preContent.substring(0, 150)}...`;
	return (
		<WrpperProps onClick={onClick} imgUrl={imgUrl} dateColor={colors.gray4}>
			<div className="image-container">
				<img alt="" className="thumb-nail" src={imgUrl}/>
			</div>
			<div className="li-article">
				<div className="post-info">
					<h3 className="title" onClick={onClick}>
						{title}
					</h3>
					<span className="date">{formatDate(date)}</span>
				</div>
				<div className="pre-content">{pre}</div>
			</div>
		</WrpperProps>
	);
}

const WrpperProps = (props) => (
	<li
		css={css`
			border-radius: 4px;
			box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
			cursor: pointer;
			.li-article {
				padding: 1rem 1.5rem;
				height: ${props.imgUrl ? '29rem' : '41rem'};
				padding-top: 2rem;
				.post-info {
					min-height: ${props.imgUrl ? '12rem' : '13rem'};
					border-bottom: 1px solid ${props.dateColor};
					.title {
						max-height: 11.5rem;
						overflow: hidden;
						word-break: break-all;
					}
					.date {
						color: ${props.dateColor};
						font-size: 1.5rem;
						margin-bottom: 2rem;
					}
				}
				.pre-content {
					margin-top: 1.5rem;
					color: #868e96;
					font-size: 1.5rem;
					overflow: hidden;
					height: ${props.imgUrl ? '5rem' : '20rem'};
					line-height: 1.9;
					word-break: break-word;
				}
			}
			.image-container {
				overflow: hidden;
				border-radius: 4px 4px 0 0;
				height: 18rem;
				cursor: pointer;
				display: ${!props.imgUrl && 'none'};
				img {
					object-fit: cover;
					height: 100%;
					width: 100%;
					border-radius: 4px 4px 0 0;
					-webkit-transform: scale(1);
					-moz-transform: scale(1);
					-ms-transform: scale(1);
					-o-transform: scale(1);
					transform: scale(1);
					& :hover {
						transform: scale(1.1);
						-webkit-transform: scale(1.1);
						-moz-transform: scale(1.1);
						-ms-transform: scale(1.1);
						-o-transform: scale(1.1);
						transition: 0.3s;
						-webkit-transition: 0.3s;
						-moz-transition: 0.3s;
						-ms-transition: 0.3s;
						-o-transition: 0.3s;
					}
				}
			}
		`}
	>
		{props.children}
	</li>
);
