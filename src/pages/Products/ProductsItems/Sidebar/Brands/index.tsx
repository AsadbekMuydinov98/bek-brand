import React from 'react';
import { Tag, Space } from 'antd';

interface Brand {
  value: string;
  label: string;
}

interface BrandsProps {
  brandsData: Brand[];
  selectedBrands: string[];
  handleChange: (brand: string, checked: boolean) => void;
}

const Brands: React.FC<BrandsProps> = ({ brandsData, selectedBrands, handleChange }) => {
  return (
    <Space direction="vertical" size="middle">
      <span>Select Brands:</span>
      <Space wrap>
        {brandsData.map((brand) => (
          <Tag.CheckableTag
            key={brand.value}
            checked={selectedBrands.includes(brand.value)}
            onChange={(checked) => handleChange(brand.value, checked)}
          >
            {brand.label}
          </Tag.CheckableTag>
        ))}
      </Space>
    </Space>
  );
};

export default Brands;
