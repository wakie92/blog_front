import React from 'react';
import styled from 'styled-components';
import { FiImage } from 'react-icons/fi';
import Tag from '../CommonUI/Tag';

type TagAndImg = {
	reqGetImgUrl: (e: React.ChangeEvent<HTMLInputElement>) => void;
	tag: string;
	tagArr: string[];
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onAddTag: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
const TagAndImg = ({ reqGetImgUrl, tag, tagArr, onChange, onAddTag }: TagAndImg) => {
	return (
		<Wrapper>
      {tagArr.map((tagEle, index) => (
        <Tag key={`${tagEle}_${index}`} tagString={tagEle} />
      ))}
      <input 
        className="tag-input" 
        placeholder="태그를 입력하세요" 
        name="tag"
        value={tag}
        onChange={onChange} 
        onKeyUp={onAddTag} 
      />
      <input 
        type="file" 
        className="img-upload" 
        id="img-upload" 
        onChange={reqGetImgUrl} 
      />
			<label htmlFor="img-upload">
				<FiImage className="svg-icon" />
			</label>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 5rem;
	display: flex;
	position: relative;
	.tag-input {
		height: 4rem;
		padding: 0.5rem;
		font-size: 2rem;
	}
	.img-upload {
		display: none;
	}
	.svg-icon {
		position: absolute;
		right: 0rem;
		font-size: 3rem;
		padding-top: 1rem;
		padding-left: 1rem;
		padding-right: 1.8rem;
		cursor: pointer;
	}
`;

export default React.memo(TagAndImg);
