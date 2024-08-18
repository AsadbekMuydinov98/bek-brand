import React from 'react';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

interface ViewIconsProps {
  view: 'grid' | 'list';
  changeView: (view: 'grid' | 'list') => void;
}

const ViewIcons: React.FC<ViewIconsProps> = ({ view, changeView }) => {
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
