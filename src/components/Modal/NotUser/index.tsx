import React from 'react';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';

interface NotUserProps {
  hideModal: () => void;
  showModal?: () => void;
  open: boolean;
  goToRegister: () => void;
}

const NotUser: React.FC<NotUserProps> = ({ hideModal, open, goToRegister }) => {
  return (
    <Modal
      title="You're not registered"
      open={open}
      onOk={goToRegister}
      onCancel={hideModal}
      okText="Ok"
      cancelText="No"
    >
      <p>Sorry, you are not authorized to add this product.</p>
      Please <Link to='/login'>Register</Link> now.
    </Modal>
  );
};

export default NotUser;
