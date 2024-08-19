import { Card, Col, Typography } from 'antd';
import ImageWithHoverIcons from './Actions';
import CardPrice from './Price';
import { Vertical } from './style';

const { Text } = Typography;
const { Meta } = Card;

const VerticalCard = ({ product, onAddToCart, onAddToFavorites, onViewDetails, isSlider, isFavorite }) => {
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
              price={(product.price * (1 - product.discountPercent / 100)).toFixed(2)}
              originalPrice={product.price}
              discount={product.discountPercent}
            />
          </div>
        </Card>
      </Vertical>
    </Col>
  );
};

export default VerticalCard;
