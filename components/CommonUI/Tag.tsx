import styled from 'styled-components'
import { colors } from '../../lib/styles/global';

type TagProps = {
  tagString: string;
}
const Tag = ({ tagString }: TagProps ) => (
  <TagDiv>
    <span>{tagString}</span>
  </TagDiv>
)

const TagDiv = styled.div`
  border-radius: 1.6rem;
  background-color: ${colors.gray4};
  font-weight: 600;
  margin: 0.5rem;
  font-size: 1.4rem;
  padding: 0.4rem 1rem;
  line-height: 1.3;
  height: 2rem;
`
export default Tag;