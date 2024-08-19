import ReactDOM from 'react-dom';
import { Modal } from 'antd';

const UniversalModal = ({ visible, onCancel, children }) => {
  return ReactDOM.createPortal(
    <Modal open={visible} onCancel={onCancel} footer={null}>
      {children}
    </Modal>,
    document.getElementById('modal-root') 
  );
};

export default UniversalModal;

