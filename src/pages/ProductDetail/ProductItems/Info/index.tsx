// src/ProductInfo.tsx
import React, { useState } from 'react';
import { Typography } from 'antd';
import Price from './Price';
import Color from './Color';
import ProductSpecs from './ProductSpecs';

const { Title, Paragraph } = Typography;

interface Product {
  title: string;
  description: string;
  price: number;
  colors: string[];
  discountPercent: number;
  category: {name: string}
}

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [color, setColor] = useState<string>('red');

  return (
    <div className="product-info">
      <Title>{product.title}</Title>
      <Price product={product} />
      <ProductSpecs product={product} />
      <Paragraph>Description: {product.description}</Paragraph>
      <Color color={color} setColor={setColor} />
    </div>
  );
};

export default ProductInfo;
