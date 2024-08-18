import React from 'react';
import { Card, Col, Typography } from 'antd';
import ImageWithHoverIcons from './Actions';
import CardPrice from './Price';
import { Vertical } from './style';

const { Text } = Typography;
const { Meta } = Card;

interface Product {
  images: string | string[];
  title: string;
  brand: {
    name: string;
  };
  price: number;
  discountPercent: number;
}

interface VerticalCardProps {
  product: Product;
  onAddToCart: () => void;
  onAddToFavorites: () => void;
  onViewDetails: () => void;
  isSlider?: boolean;
  isFavorite?: boolean;
}

const VerticalCard: React.FC<VerticalCardProps> = ({
  product,
  onAddToCart,
  onAddToFavorites,
  onViewDetails,
  isSlider = false,
  isFavorite = false
}) => {
  return (
    <Col xs={isSlider ? 24 : 12} md={isSlider ? 24 : 8} xl={isSlider ? 24 : 6}>
      <Vertical>
        <Card
          hoverable
          cover={
            <ImageWithHoverIcons
              imageUrl={product.images}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
              onViewDetails={onViewDetails}
              isFavorite={isFavorite}
            />
          }
          className="product-card"
        >
          <Meta title={product.title} />
          <Text>{product.brand.name}</Text>
          <div className="product-details">
            <CardPrice
              price={product.price * (1 - product.discountPercent / 100)}
              originalPrice={product.price}
              discountPercent={product.discountPercent}
            />
          </div>
        </Card>
      </Vertical>
    </Col>
  );
};

export default VerticalCard;
