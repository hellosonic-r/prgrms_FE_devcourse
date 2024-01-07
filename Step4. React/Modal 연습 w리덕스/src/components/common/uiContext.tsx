import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useCallback } from 'react';
import { MODAL_VIEWS, modalActions } from '../../store/reducers/modalReducer';
import TestModal from '../modalViews/TestModal';
import Modal from './Modal/Modal';

export const useUI = () => {
  const dispatch = useDispatch();

  // 리듀서 상태
  const {
    displayModal,
    modalView,
    props: modalProps,
  } = useSelector(({ modal }: RootState) => modal);

  // 리듀서 액션
  const openModal = useCallback(
    (props?: any) =>
      dispatch(modalActions.modalReducer({ type: 'OPEN_MODAL', props })),
    [dispatch]
  );

  const closeModal = useCallback(
    () => dispatch(modalActions.modalReducer({ type: 'CLOSE_MODAL' })),
    [dispatch]
  );

  const setModalView = useCallback(
    (view) =>
      dispatch(modalActions.modalReducer({ type: 'SET_MODAL_VIEW', view })),
    [dispatch]
  );

  const context = {
    displayModal,
    modalView,
    modalProps,
    openModal: (props?: any) => openModal(props),
    closeModal: () => closeModal(),
    setModalView: (view: MODAL_VIEWS) => setModalView(view),
  };

  return context;
};

const ModalView: React.FC<{
  modalView: MODAL_VIEWS;
  closeModal(): any;
  props?: any;
}> = ({ modalView, closeModal, props }) => {
  return (
    <Modal onClose={closeModal}>
      {/* 여기에 모달 타입 */}
      {modalView === 'INIT_VIEW' && <TestModal />}
    </Modal>
  );
};

const ModalUI = (...rest) => {
  const { displayModal, closeModal, modalView, modalProps } = useUI();
  return displayModal ? (
    <ModalView
      modalView={modalView}
      closeModal={closeModal}
      props={modalProps}
      {...rest}
    />
  ) : null;
};

export const ManageUIContext = ({ children }) => {
  return (
    <>
      <ModalUI />
      {children}
    </>
  );
};
