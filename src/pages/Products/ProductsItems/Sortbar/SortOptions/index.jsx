import { Select } from 'antd';

const { Option } = Select;

const SortOptions = ({ sortBy, setSortBy }) => {
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
