import React from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';

interface CardActionsProps {
  onAddToCart: () => void;
  onAddToFavorites: () => void;
  onViewDetails?: () => void;
  isFavorite?: boolean;
}

const CardActions: React.FC<CardActionsProps> = ({ onAddToCart, onAddToFavorites, isFavorite = false, }) => {
  return (
    <div className="horizontal-actions">
      <Button 
        type="primary" 
        icon={<ShoppingCartOutlined />} 
        onClick={onAddToCart}
        aria-label="Add to cart"
      >
        Add To Cart
      </Button>
      {
        isFavorite ? (
          <Button 
            icon={<HeartOutlined />} 
            onClick={onAddToFavorites}
            aria-label="Add to wishlist"
          >
            Wishlist
          </Button>
        ) : (
          <Button 
            icon={<HeartFilled />} 
            onClick={onAddToFavorites}
            aria-label="Add to wishlist"
          >
            Wishlist
          </Button>
        )
      }
      
    </div>
  );
};

export default CardActions;
