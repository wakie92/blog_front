import styled from 'styled-components';
import Portal from '../CommonUI/Portal';
import Modal from '../CommonUI/Modal';
import { colors } from '../../lib/styles/global';

const Login = ({ visible }) => {
  return (
    <Modal visible={visible}>
      <Wrapper />
    </Modal>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 30rem;
  height: 50rem;
  border-radius: 0.5rem;
  background-color: ${colors.gray3};
`;
export default Login;
