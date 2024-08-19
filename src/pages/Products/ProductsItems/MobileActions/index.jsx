import { Collapse } from 'antd';
import Sidebar from '../Sidebar/index.jsx';
import SortBar from '../Sortbar';
import './style.css'


const MobileActions = (
  {
    brands, 
    colors, 
    changeView, 
    view, 
    totalItems, 
    onColorChange, 
    selectedBrands, 
    selectedColors,
    onBrandChange,
    setSearch
  }) => {
      
  const items = [
    {
      key: '1',
      label: 'Sort bar',
      children: 
        <SortBar 
          isMobile 
          changeView={changeView} 
          view={view} 
          totalItems={totalItems} 
          setSearch={setSearch}
        />,
    },
    {
      key: '2',
      label: 'Select bar',
      children: 
        <Sidebar 
          isMobile 
          brands={brands} 
          colors={colors} 
          onBrandChange={onBrandChange}
          onColorChange={onColorChange}
          selectedBrands={selectedBrands}
          selectedColors={selectedColors}
        />,
    },
  
  ];
  
  return <Collapse className='mobile-action' items={items} defaultActiveKey={['1']}/>;
};
export default MobileActions;