import styled from 'styled-components';

type TagsProps = {
  tagArr: string[]
}
const Tags = ({tagArr}: TagsProps) => {
  return (
    <Wrapper>
      {tagArr.map((tagEle, index) => (
        <TagsDiv key={`${tagEle}_${index}`}>{tagEle}</TagsDiv>
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
`
const TagsDiv = styled.div`
	border-radius: 1.6rem;
	background-color: #ccc;
	margin: 0.5rem;
	padding: 0.5rem;
	line-height: 1.5;
`;
export default Tags;