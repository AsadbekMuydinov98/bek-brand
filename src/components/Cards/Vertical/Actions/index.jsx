import { ShoppingCartOutlined, EyeOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import './style.css';
import { baseUrl } from '../../../../constants';

const ImageWithHoverIcons = ({ imageUrl, onAddToCart, onViewDetails, onAddToFavorites, isFavorite }) => {
  const imageSrc = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;
  const src = `${baseUrl}/${imageSrc}`;

  return (
    <div className="image-container">
      <img 
        alt={src} 
        src={src}
        onError={(e) => e.target.src = 'fallback-image-url'}
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
