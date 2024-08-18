// AdsProducts.tsx
import React from 'react';
import { Row, Typography } from 'antd';
import VerticalCard from '../../../../components/Cards/Vertical';
import { iProduct } from '../../../../interfaces';

const { Title } = Typography;

interface AdsProductsProps {
  adsproducts: iProduct[];
  handleAddToCart: (product: iProduct) => void;
  onViewDetails: (id: string) => void;
  handleAddToWishList: (product: iProduct) => void;
}

const AdsProducts: React.FC<AdsProductsProps> = ({ adsproducts, handleAddToCart, onViewDetails, handleAddToWishList }) => {
  const featuredProducts = adsproducts.slice(0, 3);

  return (
    <div>
      <Title className="section-title">FEATURED PRODUCTS</Title>
      <Row justify="center" className="products-section">
        {featuredProducts.map((product) => (
          <VerticalCard
            key={product._id}
            product={product}
            onAddToCart={handleAddToCart}
            onAddToFavorites={handleAddToWishList}
            onViewDetails={onViewDetails}
          />
        ))}
      </Row>
    </div>
  );
};

export default AdsProducts;
