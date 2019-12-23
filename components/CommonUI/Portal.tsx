import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

type Portal = {
  children: ReactNode;
};
const Portal = ({ children }: Portal) => {
  const test = document.getElementById('d');
  const element: HTMLElement = document.getElementById('other');
  return createPortal(children, element);
};

export default Portal;
