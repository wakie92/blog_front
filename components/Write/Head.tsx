import React from 'react';
import styled from 'styled-components';
import { FiArrowLeft, FiUpload } from 'react-icons/fi';
import { colors } from '../../lib/styles/global';

type HeadProps = {
	title: string;
	onUpload: () => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	reqImgUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const Head = ({reqImgUpload, title, onUpload, onChange }: HeadProps) => {
	const backLink = () => {
		history.back();
	};
	return (
		<Title>
			<FiArrowLeft onClick={backLink} className="svg-icon" />
			<input placeholder="제목" name="title" onChange={onChange} value={title} />
			<input type="file" className="file-upload" id="file-upload" onChange={reqImgUpload} />
			<label htmlFor="file-upload">
				<FiUpload className="svg-icon" />
			</label>
			<button type="button" onClick={onUpload}>
				작성하기
			</button>
		</Title>
	);
};
export default React.memo(Head,
	
	)
const Title = styled.div`
	width: 100%;
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
	.file-upload {
		display: none;
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
