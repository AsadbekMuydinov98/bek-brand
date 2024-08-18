import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

interface Product {
  category: {
    name: string;
  };
}

interface ProductSpecsProps {
  product: Product;
}

const ProductSpecs: React.FC<ProductSpecsProps> = ({ product }) => {
  return (
    <div>
      <Paragraph>Availability: <span>In stock</span></Paragraph>
      <Paragraph>Category: <span>{product.category.name}</span></Paragraph>
      <Paragraph>Free shipping: <span>Yes</span></Paragraph>
    </div>
  );
};

export default ProductSpecs;
