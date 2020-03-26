import styled from 'styled-components';
import { FiImage } from 'react-icons/fi';

type TagAndImg = {
  reqGetImgUrl: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}
const TagAndImg = ({ reqGetImgUrl }: TagAndImg) => {
  return (
    <Wrapper>
      <Tags>
        dfddf
      </Tags>
      <Tags>
        dfddfdfdfdf
      </Tags>
      <input className="tag-input" placeholder="태그를 입력하세요" />
			<input type="file" className="img-upload" id="img-upload" onChange={reqGetImgUrl} />
			<label htmlFor="img-upload">
        <FiImage className="svg-icon"/>
      </label>
    </Wrapper>
  )
}

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
`
const Tags = styled.div`
  border-radius: 1.6rem;
  background-color: #ccc;
  margin: 0.5rem;
  padding: 0.5rem;
  line-height: 1.5;
`

export default TagAndImg;