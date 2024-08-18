import React from 'react';
import { Card, Typography } from 'antd';
import CardImage from './Image';
import CardPrice from './Price';
import CardActions from './Actions';
import { Horizontal } from './style';

const { Title, Text, Paragraph } = Typography;

interface Product {
  images: string[];
  title: string;
  brand: {
    name: string;
  };
  price: number;
  discountPercent: number;
  description: string;
}

interface HorizontalCardProps {
  product: Product;
  onAddToCart: () => void;
  onAddToFavorites: () => void;
  onViewDetails: () => void;
  isFavorite?: boolean;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ product, onAddToCart, onAddToFavorites, onViewDetails, isFavorite = false }) => {
  return (
    <Horizontal>
      <Card hoverable>
        <div className="horizontal-card-content">
          <CardImage image={product.images} />
          <div className="horizontal-details">
            <Title level={4}>{product.title}</Title>
            <Text>{product.brand.name}</Text>
            <CardPrice 
              price={product.price * (1 - product.discountPercent / 100)} 
              originalPrice={product.price} 
              discountPercent={product.discountPercent} 
            />
            <Paragraph>{product.description}</Paragraph>
            <CardActions 
              onAddToCart={onAddToCart} 
              onAddToFavorites={onAddToFavorites} 
              onViewDetails={onViewDetails} 
              isFavorite={isFavorite}
            />
          </div>
        </div>
      </Card>
    </Horizontal>
  );
};

export default HorizontalCard;
