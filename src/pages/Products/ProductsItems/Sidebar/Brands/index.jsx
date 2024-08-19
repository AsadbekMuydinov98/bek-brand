import { Tag } from 'antd';
import { Flex } from 'antd';

const Brands = ({ brandsData, selectedBrands, handleChange }) => {
  return (
    <Flex gap={4} wrap align="center">
      <span>Select Brands:</span>
      {brandsData.map((brand) => (
        <Tag.CheckableTag
          key={brand.value}
          checked={selectedBrands.includes(brand.value)}
          onChange={(checked) => handleChange(brand.value, checked)}
        >
          {brand.label}
        </Tag.CheckableTag>
      ))}
    </Flex>
  );
};

export default Brands;
