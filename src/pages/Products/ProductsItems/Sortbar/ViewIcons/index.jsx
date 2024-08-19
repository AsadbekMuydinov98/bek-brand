import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

const ViewIcons = ({ view, changeView }) => {
  return (
    <div className="view-icons">
      <AppstoreOutlined
        className={view === 'grid' ? 'active' : ''}
        onClick={() => changeView('grid')}
      />
      <BarsOutlined
        className={view === 'list' ? 'active' : ''}
        onClick={() => changeView('list')}
      />
    </div>
  );
};

export default ViewIcons;
