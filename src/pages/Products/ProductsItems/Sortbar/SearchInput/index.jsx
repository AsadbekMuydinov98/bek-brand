import { Input } from 'antd';

const { Search } = Input;

const SearchInput = ({ setSearch }) => {
  return (
    <Search
      placeholder="Search product"
      size="large"
      onChange={setSearch}
      className="sort-search"
    />
  );
};

export default SearchInput;
