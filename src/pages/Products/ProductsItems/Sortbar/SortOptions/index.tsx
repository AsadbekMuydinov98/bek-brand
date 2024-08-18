import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface SortOptionsProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-by">
      <span>Sort By</span>
      <Select defaultValue={sortBy} onChange={setSortBy}>
        <Option value="name">Name</Option>
        <Option value="price">Price</Option>
      </Select>
    </div>
  );
};

export default SortOptions;
