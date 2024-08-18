import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

interface SearchInputProps {
  setSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ setSearch }) => {
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
