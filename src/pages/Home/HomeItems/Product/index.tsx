import React from 'react';
import 'antd/dist/reset.css';
import './style.css';
import Slider from 'react-slick';
import VerticalCard from '../../../../components/Cards/Vertical';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderSettings from './helper';
import { iProduct } from '../../../../interfaces';


interface ProductProps {
  products: iProduct[];
  handleAddToWishList: (product: iProduct) => void;
  handleAddToCart: (product: iProduct) => void;
  onViewDetails: (id: string) => void;
}

const Product: React.FC<ProductProps> = ({
  products,
  handleAddToWishList,
  handleAddToCart,
  onViewDetails,
}) => {
  const settings = sliderSettings();
  const lastProducts = products.slice(-10);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {lastProducts.map((product) => (
          <VerticalCard
            key={product._id}
            isSlider
            product={product}
            onAddToFavorites={() => handleAddToWishList(product)}
            onAddToCart={() => handleAddToCart(product)}
            onViewDetails={() => onViewDetails(product._id)}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Product;
