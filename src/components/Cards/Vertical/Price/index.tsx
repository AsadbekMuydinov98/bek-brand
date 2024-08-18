import React from 'react';

interface CardPriceProps {
  price: number;
  originalPrice: number;
  discountPercent: number;
}

const CardPrice: React.FC<CardPriceProps> = ({ price, originalPrice, discountPercent }) => {
  return (
    <div className="product-price">
      <span className="price">${price.toFixed(2)}</span>
      <span className="original-price">${originalPrice.toFixed(2)}</span>
      <span className="discount">{discountPercent}% Off</span>
    </div>
  );
}

export default CardPrice;
