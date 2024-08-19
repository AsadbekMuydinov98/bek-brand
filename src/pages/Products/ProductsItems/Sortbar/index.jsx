// SortBar.js
import { useSelector } from 'react-redux';
import SearchInput from './SearchInput';
import SortOptions from './SortOptions';
import ViewIcons from './ViewIcons';
import { SortBarWrap } from './style';

const SortBar = ({ totalItems, sortBy, setSearch, setSortBy, changeView, view, isMobile }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <SortBarWrap $themeMode={theme} className={isMobile ? 'mobile-sort-bar' : ''}>
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
