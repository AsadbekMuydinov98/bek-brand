import React from 'react';
import { Collapse } from 'antd';
import Sidebar from '../Sidebar/index';
import SortBar from '../Sortbar/index';
import './style.css';

interface MobileActionsProps {
  brands: Array<{ value: string; label: string }>;
  colors: Array<{ value: string; label: string }>;
  changeView: (view: string) => void;
  view: string;
  totalItems: number;
  onColorChange: (color: string, checked: boolean) => void;
  selectedBrands: string[];
  selectedColors: string[];
  onBrandChange: (brands: string[]) => void;
  setSearch: React.ChangeEventHandler<HTMLInputElement>;
}

const MobileActions: React.FC<MobileActionsProps> = ({
  brands,
  colors,
  changeView,
  view,
  totalItems,
  onColorChange,
  selectedBrands,
  selectedColors,
  onBrandChange,
  setSearch,
}) => {
  const items = [
    {
      key: '1',
      label: 'Sort bar',
      children: (
        <SortBar
          isMobile
          changeView={changeView}
          view={view}
          totalItems={totalItems}
          setSearch={setSearch}
        />
      ),
    },
    {
      key: '2',
      label: 'Select bar',
      children: (
        <Sidebar
          isMobile
          brands={brands}
          colors={colors}
          onBrandChange={onBrandChange}
          onColorChange={onColorChange}
          selectedBrands={selectedBrands}
          selectedColors={selectedColors}
        />
      ),
    },
  ];

  return <Collapse className="mobile-action" items={items} defaultActiveKey={['1']} />;
};

export default MobileActions;
