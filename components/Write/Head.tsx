import styled from 'styled-components';
import { colors } from '../../lib/styles/global';

interface HeadProps {
  title: string;
}
export default function Head({ title }) {
  return (
    <Title>
      <input placeholder={title} value={title} />
    </Title>
  );
}

Head.defaultProps = {
  title: '제목',
};
const Title = styled.div`
  width: calc(100% - 0.5rem);

  height: 6rem;
  background-color: ${colors.gray2};
  border-bottom: 2px solid ${colors.gray3};
  margin-bottom: 1rem;
  input {
    width: calc(100% - 0.5rem);
    height: 100%;
    padding: 0.5rem;
  }
`;
