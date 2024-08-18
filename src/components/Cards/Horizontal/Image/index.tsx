import React from 'react';
import { baseUrl } from '../../../../constants';

interface CardImageProps {
  image: string | string[];
}

const CardImage: React.FC<CardImageProps> = ({ image }) => {
  const imageSrc = Array.isArray(image) ? image[0] : image;

  const src = `${baseUrl}/${imageSrc}`;
  return (
    <div className="horizontal-image">
      <img
        src={src}
        alt="Product image"
        style={{ width: '100%', height: 'auto' }} // Ensures the image scales properly
      />
    </div>
  );
};

export default CardImage;
