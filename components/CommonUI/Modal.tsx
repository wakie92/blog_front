import styled from 'styled-components';
import Portal from './Portal';
import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  visible: boolean;
};
const Modal = ({ children, visible }: ModalProps) => {
  return (
    <Portal>
      <Wrapper visible={visible}>{children}</Wrapper>
    </Portal>
  );
};

const Wrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  opacity: 0.3;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;

Modal.defaultProps = {
  visible: false,
};
export default Modal;
