import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '../../lib/styles/global';
import { FiArrowLeft, FiUpload } from 'react-icons/fi';
import { ROUTES } from '../../lib/Routes/Routes';

type HeadProps = {
	postWrite: {
		title: string;
		inputValue: string;
		mdValue: string;
	};
	onUpload: (
		postData: {
			title: string;
			inputValue: string;
			mdValue: string;
		}
	) => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default React.memo(function Head({ postWrite, onUpload, onChange }: HeadProps) {
	const backLink = () => {
		history.back();
	};
	return (
		<Title>
			<FiArrowLeft onClick={backLink} className="svg-icon" />
			<input placeholder="제목" name="title" onChange={onChange} value={postWrite.title} />
			<FiUpload className="svg-icon" />
			<button type="button" onClick={() => onUpload(postWrite)}>
				작성하기
			</button>
		</Title>
	);
});

const Title = styled.div`
	width: calc(100% - 0.5rem);
	background-color: ${colors.defaultBlack};
	height: 7rem;
	button {
		width: 8rem;
		height: 3.4rem;
		margin-top: 1.8rem;
		margin-left: 1rem;
		background-color: ${colors.gray1};
		color: ${colors.defaultBlack};
		font-size: 1.6rem;
		border-radius: 4px;
		border: 2px solid ${colors.gray1};
	}
	.svg-icon {
		color: #fff;
		font-size: 3rem;
		padding-top: 2rem;
		padding-left: 1rem;
		padding-right: 1rem;
		cursor: pointer;
	}
	input {
		background-color: ${colors.defaultBlack};
		width: calc(100% - 22rem);
		height: 6rem;
		padding: 0.5rem;
		font-size: 3rem;
		color: #fff;
	}
`;
