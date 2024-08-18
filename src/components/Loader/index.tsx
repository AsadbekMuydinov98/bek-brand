import ReactDOM from 'react-dom';
import { Spin } from 'antd';
import { LoaderWrapper } from './style';

interface LoaderProps {
  visible: boolean;
}

const Loader: React.FC<LoaderProps> = ({ visible }) => {
  return ReactDOM.createPortal(
    visible && (
      <LoaderWrapper>
        <Spin size="large" />
      </LoaderWrapper>
    ),
    document.getElementById('loader-root') as HTMLElement
  );
};

export default Loader;
