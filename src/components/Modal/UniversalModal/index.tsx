import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';

interface UniversalModalProps {
  visible: boolean;
  onCancel: () => void;
  children: React.ReactNode;
}

const UniversalModal: React.FC<UniversalModalProps> = ({ visible, onCancel, children }) => {
  return ReactDOM.createPortal(
    <Modal open={visible} onCancel={onCancel} footer={null}>
      {children}
    </Modal>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default UniversalModal;
