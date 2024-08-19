import { Card, Col } from "antd";
import Actions from "./Actions";
import { baseUrl } from "../../../constants";

const Item = ({ product, handleRemoveFromWishlist, handleAddToCart, getImageUrl }) => {
  return (
    <Col xs={24} sm={12} md={8} xl={6}>
      <Card
        hoverable
        cover={<img alt={product.title} src={`${baseUrl}/${getImageUrl(product.images)}`} />}
        actions={[
          <Actions 
            product={product}
            key={`actions-${product._id}`}
            handleRemoveFromWishlist={handleRemoveFromWishlist}
            handleAddToCart={handleAddToCart}
          />
        ]}
        className='fav-card'
      >
        <Card.Meta title={product.title} description={`$${product.price}`} />
      </Card>
    </Col>
  );
};

export default Item;
