import ReactDOM from 'react-dom';
import { Spin } from 'antd';
import { LoaderWrapper } from './style';

const Loader = ({ visible }) => {
  return ReactDOM.createPortal(
    visible && (
      <LoaderWrapper>
        <Spin size="large" />
      </LoaderWrapper>
    ),
    document.getElementById('loader-root')
  );
};

export default Loader;