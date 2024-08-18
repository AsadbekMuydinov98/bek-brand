import React from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;

interface CardPriceProps {
  price: number;
  originalPrice: number;
  discountPercent: number;
}

const CardPrice: React.FC<CardPriceProps> = ({ price, originalPrice, discountPercent }) => {
  return (
    <div className="horizontal-pricing">
      <Title level={3} type="success">
        ${price.toFixed(2)}
      </Title>
      <Text delete>${originalPrice.toFixed(2)}</Text>
      <Text type="danger"> {discountPercent}% Off</Text>
    </div>
  );
};

export default CardPrice;
