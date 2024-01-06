import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import styled from 'styled-components';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
  onEnter?: () => void | null;
}

const ModalBackground = styled.div`
  z-index: 9999;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  backdrop-filter: blur(1.2px);
`;

const Modal: React.FC<IModalProps> = ({ children, onClose }) => {
  const ref = useRef();

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        return onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const modal = ref.current;

    if (modal) {
      disableBodyScroll(modal, { reverseScrollBarGap: false });
      window.addEventListener('keydown', handleKey);
    }
    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return <ModalBackground ref={ref}>{children}</ModalBackground>;
};

export default Modal;
