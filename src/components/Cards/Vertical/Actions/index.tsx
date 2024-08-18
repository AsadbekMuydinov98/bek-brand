import React from 'react';
import { ShoppingCartOutlined, EyeOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import './style.css'; 
import { baseUrl } from '../../../../constants';

interface ImageWithHoverIconsProps {
  imageUrl: string | string[];
  onAddToCart: () => void;
  onViewDetails: () => void;
  onAddToFavorites: () => void;
  isFavorite?: boolean;
}

const ImageWithHoverIcons: React.FC<ImageWithHoverIconsProps> = ({
  imageUrl,
  onAddToCart,
  onViewDetails,
  onAddToFavorites,
  isFavorite = false,
}) => {
  const imageSrc = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;
  const src = `${baseUrl}/${imageSrc}`;

  return (
    <div className="image-container">
      <img 
        alt="Product" 
        src={src}
        onError={(e) => e.currentTarget.src = 'fallback-image-url'}
      />
      <div className="hover-overlay">
        <ShoppingCartOutlined onClick={onAddToCart} className="icon" />
        <EyeOutlined onClick={onViewDetails} className="icon" />
        {isFavorite ? (
          <HeartFilled onClick={onAddToFavorites} className="icon" style={{ color: 'red' }} />
        ) : (
          <HeartOutlined onClick={onAddToFavorites} className="icon" />
        )}
      </div>
    </div>
  );
};

export default ImageWithHoverIcons;
