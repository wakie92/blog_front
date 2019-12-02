import styled from 'styled-components';
import { colors } from '../../lib/styles/global';
import { FiArrowLeft, FiUpload } from 'react-icons/fi';
interface HeadProps {
  title: string,
}

export default function Head({ title }: HeadProps) {
  const backLink = () => {
    history.back();
  }
  return (
    <Title>
      <FiArrowLeft onClick={backLink} className="svg-icon" />
      <input placeholder={title} value={title} />
      <FiUpload className="svg-icon" />
      <button type="button">작성하기</button>
    </Title>
  );
}

Head.defaultProps = {
  title: '제목',
};

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
