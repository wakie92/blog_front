import ReactDOM from 'react-dom';
import { ReactNode } from 'react';

type Portal = {
  children: ReactNode,
}
const Portal = ({ children }: Portal) => {
  const element: HTMLElement = document.getElementById('other');
  return ReactDOM.createPortal(children, element);
};

export default Portal;
