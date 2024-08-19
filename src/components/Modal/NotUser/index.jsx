import { Modal } from 'antd';
import { Link } from 'react-router-dom';

const NotUser = ({hideModal, open, goToRegister}) => {

  return (
    <>
      <Modal
        title="You're not registered"
        open={open}
        onOk={goToRegister}
        onCancel={hideModal}
        okText="Ok"
        cancelText="No"
      >
        <p>Sorry, you are not authorized to ad this product.</p>
        Please <Link to='/login'> Register </Link>now.
      </Modal>
    </>
    );
  };


export default NotUser
