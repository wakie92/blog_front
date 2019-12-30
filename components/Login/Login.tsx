import styled from 'styled-components';
import Portal from '../CommonUI/Portal';
import Modal from '../CommonUI/Modal';
import { colors } from '../../lib/styles/global';
import { TiTimes } from 'react-icons/ti';
import Button from '../CommonUI/Button';

type LoginProps = {
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  visible: boolean;
  email: string;
  password: string;
};
const Login = ({ visible, onClick, email, password, onChange }: LoginProps) => {
  return (
    <Modal visible={visible}>
      <Wrapper>
        <div className="modal-header">
          <Button type="button">
            <TiTimes />
          </Button>
        </div>
        <div className="input-box">
          <input type="text" value={email} name="email" onChange={onChange} />
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChange}
          />
        </div>
        <Button type="submit" onClick={onClick}>
          로그인
        </Button>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.form`
  display: flex;
  width: 30rem;
  height: 50rem;
  border-radius: 0.5rem;
  background-color: ${colors.gray3};
  flex-direction: column;
  .modal-header {
    width: 100%;
    height: 5rem;
  }
  .input-box {
    width: 100%;
    height: 40rem;
    padding-top: 20rem;
    display: flex;
    flex-direction: column;
    input {
      height: 4rem;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
`;
export default Login;
