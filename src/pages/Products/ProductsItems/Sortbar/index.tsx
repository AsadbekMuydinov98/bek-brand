import React from 'react';
import { useSelector } from 'react-redux';
import SearchInput from './SearchInput';
import SortOptions from './SortOptions';
import ViewIcons from './ViewIcons';
import { SortBarWrap } from './style';
import { RootState } from '../../../../redux/store';

// Define the view types
type ViewType = 'grid' | 'list';

interface SortBarProps {
  totalItems: number;
  sortBy: string;
  setSearch: (value: React.ChangeEvent<HTMLInputElement>) => void;
  setSortBy: (value: string) => void;
  changeView: (view: ViewType) => void;
  view: ViewType;
  isMobile?: boolean;
}

const SortBar: React.FC<SortBarProps> = ({ 
  totalItems, 
  sortBy, 
  setSearch, 
  setSortBy, 
  changeView, 
  view, 
  isMobile 
}) => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <SortBarWrap $themeMode={theme as 'light' | 'dark'} className={isMobile ? 'mobile-sort-bar' : ''}>
      <SearchInput setSearch={setSearch} />
      <div className="sorting-type">
        <span>{totalItems} Items</span>
        <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
        <ViewIcons view={view} changeView={changeView} />
      </div>
    </SortBarWrap>
  );
};

export default SortBar;
