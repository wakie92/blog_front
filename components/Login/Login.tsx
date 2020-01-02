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
  onClose: () => void;
};
const Login = ({
  visible,
  onClick,
  email,
  password,
  onChange,
  onClose,
}: LoginProps) => {
  return (
    <Modal visible={visible}>
      <Wrapper>
        <div className="modal-header">
          <Button type="button" onClick={onClose} bgColor="unset">
            <TiTimes />
          </Button>
        </div>
        <div className="input-box">
          <input type="text" placeholder="email" value={email} name="email" onChange={onChange} />
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            placeholder="password"
          />
        </div>
        <Button type="button" size="large" onClick={onClick}>
          로그인
        </Button>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.form`
  display: flex;
  width: 30rem;
  height: 30rem;
  border-radius: 0.5rem;
  background-color: ${colors.gray3};
  flex-direction: column;
  .modal-header {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: flex-end;
    background-color: unset;
    svg {
      width: 3rem;
      height: 3rem;
    };
  }
  .input-box {
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    input {
      height: 4rem;
      font-size: 2rem;
      margin-bottom: 1rem;
      padding-left: 1rem;
    }
  }
`;
export default Login;
