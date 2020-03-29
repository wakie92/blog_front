import styled from 'styled-components';
import { colors } from '../../lib/styles/global';

type SubTitleProps = {
  subTitle: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SubTitleInput = ({ subTitle, onChange }: SubTitleProps) => {
	return (
		<Wrapper>
      <input 
        name="subTitle"
        value={subTitle}
        onChange={onChange}
        placeholder="부제를 입력하세요"
        type="text"
      />
		</Wrapper>
	);
};

export default SubTitleInput;

const Wrapper = styled.div`
	width: 100%;
	height: 4rem;
	background-color: ${colors.gray5};
	input {
		width: calc(100% - 1.6rem);
		height: calc(100% - 1.6rem);
		background-color: inherit;
		padding: 0.8rem;
		font-size: 2rem;
	}
`;
