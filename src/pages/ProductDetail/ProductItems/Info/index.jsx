// src/ProductInfo.js
import { useState } from 'react';
import { Typography } from 'antd';
import Price from './Price';
import Color from './Color';
import ProductSpecs from './ProductSpecs';
const {Title, Paragraph} = Typography

const ProductInfo = ({ product }) => {
  const [color, setColor] = useState('red');

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
