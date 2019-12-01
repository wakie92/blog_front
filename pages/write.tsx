import WriteContainer from '../containers/Write/WriteContainer';
import styled from 'styled-components';

export default function write() {
  return (
    <Wrapper>
      <WriteContainer />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 90%;
  height: 100rem;
  margin: auto;
  margin-top: 5rem;
`;
