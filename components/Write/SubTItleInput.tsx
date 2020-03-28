import styled from 'styled-components';

const SubTitleInput = () => {

  return (
    <Wrapper>
      <textarea />
    </Wrapper>
  )
}

export default SubTitleInput;

const Wrapper = styled.div`
  width: 100%;
  min-height: 3rem;
  textarea {
    width: calc(100% - 1,6rem);
    height: calc(100% - 1.6rem);
    padding: 0.8rem;
  }
`;