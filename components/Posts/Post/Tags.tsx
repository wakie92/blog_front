import styled from 'styled-components';
import Tag from '../../CommonUI/Tag';

type TagsProps = {
  tagArr: string[]
}
const Tags = ({tagArr}: TagsProps) => {
  return (
    <Wrapper>
      {tagArr.map((tagEle, index) => (
        <Tag key={`${tagEle}_${index}`} tagString={tagEle} />
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export default Tags;