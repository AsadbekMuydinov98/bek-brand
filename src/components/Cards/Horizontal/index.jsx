import { Card, Typography } from 'antd';
import CardImage from './Image';
import CardPrice from './Price';
import CardActions from './Actions';
import { Horizontal } from './style';

const { Title, Paragraph, Text } = Typography;

const HorizontalCard = ({product, onAddToCart, onAddToFavorites, onViewDetails}) => {
  return (
    <Horizontal>
      <Card hoverable>
        <div className="horizontal-card-content">
          <CardImage image={product.images}/>
          <div className="horizontal-details">
            <Title level={4}>{product.title}</Title>
            <Text>{product.brand.name}</Text>
            <CardPrice price={product.price * (1 - product.discountPercent/100)} originalPrice={product.price} discount={product.discount} />
            <Paragraph>
              {product.description}
            </Paragraph>
            <CardActions onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites}  />
          </div>
        </div>
      </Card>
    </Horizontal>
  );
};

export default HorizontalCard;