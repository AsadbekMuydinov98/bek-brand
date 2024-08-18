import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

interface Product {
  price: number;
  discountPercent: number;
}

interface PriceProps {
  product: Product;
}

const Price: React.FC<PriceProps> = ({ product }) => {
  return (
    <Paragraph className="price">
      <span className="original-price">${product.price.toFixed(2)}</span>
      <span className="discounted-price">${(product.price * (1 - product.discountPercent / 100)).toFixed(2)}</span>
      <span className="discount">{product.discountPercent}% Off</span>
    </Paragraph>
  );
};

export default Price;
