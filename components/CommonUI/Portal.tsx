import { createPortal } from 'react-dom';
import { ReactNode, useRef, useState, useEffect } from 'react';

type Portal = {
  children: ReactNode;
  visible: boolean;
};
const Portal = ({ children, visible }: Portal) => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector('#modal');
    setMounted(true)
  }, [visible])

  return mounted ? createPortal(children, ref.current) : null;
};

export default Portal;
